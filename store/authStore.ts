import {defineStore} from "pinia";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User} from "firebase/auth";
import {useNuxtApp} from "#app";

const { $auth } = useNuxtApp()

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: undefined as User | undefined,
        registrationCompleteFlag: false
    }),
    actions: {
        registrationComplete() {
            if (this.registrationCompleteFlag) {
                this.registrationCompleteFlag = false
                return true
            } else {
                return false
            }
        },
        async registrateUser (email: string, password: string) {
            try {
                const userCreds = await createUserWithEmailAndPassword($auth, email, password)
                if (userCreds) {
                    this.registrationCompleteFlag = true;
                    return true
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    return false
                }
                return false
            }
            return false
        },
        async signIn (email: string, password: string) {
            return signInWithEmailAndPassword($auth, email, password)
                .then((userCredential) => {
                    this.user = userCredential.user
                    return true;
                })
                .catch((error) => {
                    console.log(error)
                    return false;

                })
        },
        async signOut () {
            signOut($auth).then(() => {
                this.user = undefined;
                return true
            }).catch((error) => {
                console.log(error)
                return false
            });
        }
    }
})