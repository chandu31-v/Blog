import { Client, Account,ID } from "appwrite";
import config from "../../config/config"

// 1.create new account
// 2.login to existing account
// 3.logout

class AuthService{

    client = new Client()
    account

    //Connect to account using project ids
    constructor() {
        this.client = new Client()
            .setEndpoint(config.appwrite_url) // Your API Endpoint
            .setProject(config.appwrite_project_id);// Your project ID

        this.account = new Account(this.client)
    }

    //Create new Account
    async createAccount(name,email,password){
        try{
            console.log(email,password,name)
            const create = await this.account.create(ID.unique(),email,password,name)
            //ifaccount is created successfully we'll login as well
            if(create){
                this.login(email,password)
            }
        }catch(err){
            throw err
        }
    }

    //Login to existing account
    async login({email,password}){
        try{
            const login = await this.account.createEmailSession(email,password)
            return login
        }catch(err){
            throw err
        }
    }

    //logout from the account
    async logout(){
        try{
            return await this.account.deleteSession('current')
        }catch(err){
            throw err
        }
    }

}

const authService = new AuthService()
export default authService

