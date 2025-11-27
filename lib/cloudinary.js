import { v2 as cloudinary } from 'cloudinary'
if(process.env.CLOUDINARY_URL) cloudinary.config({ url: process.env.CLOUDINARY_URL })
export async function uploadBuffer(buffer, filename){
  return new Promise((resolve,reject)=>{
    const stream = cloudinary.uploader.upload_stream({ folder: 'ai_status_studio' }, (err,result)=>{
      if(err) return reject(err)
      resolve(result)
    })
    stream.end(buffer)
  })
}
export async function deleteResource(public_id){ return cloudinary.uploader.destroy(public_id) }
