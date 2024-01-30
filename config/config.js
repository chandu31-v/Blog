//Here we'll use config.js file to access .env variable and convert them to
//string as pre-caution and access variable from config.js file.

const envVariable = {
    appwrite_url:String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_project_id:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    database_id:String(import.meta.env.VITE_DATABASE_ID),
    collection_id:String(import.meta.env.VITE_COLLECTION_ID),
    bucketlist_id:String(import.meta.env.VITE_BUCKETLIST_ID)
}

export default envVariable