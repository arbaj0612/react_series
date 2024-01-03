import {Client, Account, ID} from "appwrite"
import conf from "../conf/conf";

export class AuthService{
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount ({email,password,name}) {
        try {
           const userAccount =  await this.account.create(ID.unique(), email, password, name)
           if(userAccount) {
                return this.logIn({email,password})
           }else{
                return userAccount
           }
        } catch (error) {
            throw error
        }
    }

    async logIn ({email,password}) {
        try {
           return await this.account.createEmailSession(email,password)
        } catch (error) {
           throw error 
        }
    }

    async getCurrentUSer() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null
    }

    async logOut() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService()

export default authService