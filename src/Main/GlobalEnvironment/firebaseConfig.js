import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database"
import "firebase/firebase-analytics"

const firebaseConfig = {
    apiKey: "AIzaSyDdQ0pEKN5z3BoL7LJabgghmXuRa47NjfY",
    authDomain: "socio-linkage-digital.firebaseapp.com",
    databaseURL: "https://socio-linkage-digital.firebaseio.com",
    projectId: "socio-linkage-digital",
    storageBucket: "socio-linkage-digital.appspot.com",
    messagingSenderId: "69147817239",
    appId: "1:69147817239:web:9482857db5f8a89ea03352",
    measurementId: "G-3FR0WT47LB"
  };

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.database()
        this.app=app
    }

    async getAllData() {
        let dataToBeReturn
        let arr = []
        let myData = this.db.ref("/").child("users").once("value", snap => {
            dataToBeReturn = snap.val()
        }
        ).then(() => {
            let val
            for (val in dataToBeReturn) {
                let obj = {
                    name: val,
                    value: dataToBeReturn[val]
                }
                arr.push(obj)
            }
        })
        await myData
        return (arr)
    }

    async getContent() {
        let dataToBeReturn
        let myData = this.db.ref("/").child("content").once("value", snap => {
            dataToBeReturn = snap.val()
        }
        )
        await myData
        return dataToBeReturn
    }
    async setContent(content) {
        let status
        let myData = this.db.ref("/").child("content").set(content, function (error) {
            if (error) {
                status = "Data could not be saved." + error;
            } else {
                status = "Data saved successfully.";
            }
        })
        await myData
        return status
    }

    async setFAQ(faq) {
        let status
        let myData = this.db.ref("/").child("faq").push(faq, function (error) {
            if (error) {
                status = "Data could not be saved." + error;
            } else {
                status = "Data saved successfully.";
            }
        })
        await myData
        return status
    }
    async getFAQ() {
        let dataToBeReturn
        let myData = this.db.ref("/").child("faq").once("value", snap => {
            dataToBeReturn = snap.val()
        }
        )
        await myData
        return dataToBeReturn
    }
    async delFAQ(node) {
        let myAct = this.db.ref("/").child("faq").child(node.name).remove()
        await myAct
        return("Question has been deleted")
    }


    async adminLogin(email, password) {
        let response = {}
        let userType
        await this.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            response.message = error.message
        })
        if (this.auth.currentUser) {
            await this.db.ref("/").child("admin").child(this.auth.currentUser.uid).once("value", snap => {
                userType = snap.val()
            }).then(() => {
                if (userType) {
                    if ("admin" === userType.type) {
                        response.flag = true;
                        response.message = "You are Sign in as admin"
                    }
                }
                else {
                    response.flag = false
                    response.message = "You are not registeredas admin"
                    this.logout()
                }
            }).catch(function (error) {
                response.message = error.message
            })
        }
        return (response)

    }
    async currenAdminUser(){
        let response = {}
        let userType
        if (this.auth.currentUser) {
            await this.db.ref("/").child("admin").child(this.auth.currentUser.uid).once("value", snap => {
                userType = snap.val()
            }).then(() => {
                if (userType) {
                    if ("admin" === userType.type) {
                        response.flag = true;
                        response.message = "You are Sign in as admin"
                    }
                    else{
                        response.flag = false;
                    }
                }
            })
        }
        else{
            response.flag=false
        }
        return(response)
    }

    currentUsers() {
        return this.auth.currentUser
    }
    
    async login(email, password) {
        await this.auth.signInWithEmailAndPassword(email, password)
        return this.auth.currentUser
    }
    async passReseting(email) {
        let tempMessage
        await this.auth.sendPasswordResetEmail(email).then(()=>tempMessage="Your password reset has been sent to your provided email")
        return tempMessage
    }
    async logout() {
        let returnLog = this.auth.signOut().then(() => this.currentUsers())
        await returnLog
        return returnLog
    }
    async signUp(userName, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        await this.auth.currentUser.updateProfile({
            displayName: userName
        }).then(
            this.db.ref("/").child("users").child(this.auth.currentUser.uid).set({ name: userName, email: email, id: this.auth.currentUser.uid })
        )
        await this.auth.signInWithEmailAndPassword(email, password)
        return this.auth.currentUser
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
            this.app.analytics()
        })
    }

    async formSubmit(object) {
        let data = this.db.ref("/").child("users").child(this.auth.currentUser.uid).child("form").set(object)
        await data
        return ("Form is Submitted Successfully")
    }
    async form2Submit(object) {
        let data = this.db.ref("/").child("users").child(this.auth.currentUser.uid).child("form2").set(object)
        await data
        return ("Form is Submitted Successfully")
    }
    async form3Submit(object) {
        let data = this.db.ref("/").child("users").child(this.auth.currentUser.uid).child("form3").set(object)
        await data
        return ("Form is Submitted Successfully")
    }
    async getFormData() {
        let formData = {}
        let data = this.db.ref("users").child(this.auth.currentUser.uid).once("value", snap => {
            formData = snap.val()
        })
        await data
        return formData
    }
}

export default new Firebase