import { Client, Databases, Storage , Query } from "appwrite";
import configEnv from "../../config/config"

// 1.createPost
// 2.updatePost
// 3.getPost
// 4.getPosts
// 5.deletePost
// 6.uploadFile
// 7.deleteFile
// 8.getFilePreview


class Database {

    client = new Client()
    database
    storage

    constructor() {
        this.client
            .setEndpoint(configEnv.appwrite_url)
            .setProject(configEnv.appwrite_project_id)

        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    //database
    async createPost(post_id) {
        try {
            return await this.database.createDocument(
                configEnv.database_id,
                configEnv.collection_id,
                post_id,
                //data you want to send to database
                {}
            )
        } catch (err) {
            throw err
        }
    }

    async updatePost(post_id) {
        try {
            return await this.database.updateDocument(
                configEnv.database_id,
                configEnv.collection_id,
                post_id,
                //all values to update
                {}
            )
        } catch (err) {
            throw err
        }
    }

    async getPost(post_id) {
        try {
            const post_data = await this.database.getDocument(
                configEnv.database_id,
                configEnv.collection_id,
                post_id
            )
            return post_data
        } catch (err) {
            throw err
        }
    }

    async getPosts() {
        try {
            const post_data = await this.database.listDocuments(
                configEnv.database_id,
                configEnv.collection_id,
                [
                    Query.equal("key", "active") //demo, need to be changed later
                ]
            )
        } catch (err) {
            throw err
        }
    }

    async deletePost(post_id) {
        try {
            return await this.database.deleteDocument(
                configEnv.database_id,
                configEnv.collection_id,
                post_id
            )
        } catch (err) {
            throw err
        }
    }

    //Storage

    async uploadFile(file_id, file) {
        try {
            return await this.storage.createFile(
                configEnv.bucketlist_id,
                file_id,
                file //we'll resolve it further
            )
        } catch (err) {
            throw err
        }
    }

    async deleteFile(file_id) {
        try {
            return await this.storage.deleteFile(
                configEnv.bucketlist_id,
                file_id
            )
        } catch (err) {
            throw err
        }
    }

}

const database = new Database()
export default database
