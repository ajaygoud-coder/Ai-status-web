import Redis from 'ioredis'
let client
export default function getRedis(){
  if(client) return client
  if(!process.env.REDIS_URL) return null
  client = new Redis(process.env.REDIS_URL)
  return client
}
