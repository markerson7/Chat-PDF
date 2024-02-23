import{neon, neonConfig} from "@neondatabase/serverless"
import{drizzle} from "drizzle-orm/neon-http"


neonConfig.fetchConnectionCache = true

if (!process.env.DATABASE_URL){
    throw new Error('database url not found!')
}

const slq = neon(process.env.DATABASE_URL)

export const db = drizzle(slq)