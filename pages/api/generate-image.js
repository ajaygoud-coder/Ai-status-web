import formidable from 'formidable'
import fs from 'fs'
import { uploadBuffer } from '../../lib/cloudinary'
import { textResponse } from '../../lib/openai'
export const config = { api: { bodyParser: false } }
export default async function handler(req,res){
  const form = new formidable.IncomingForm()
  form.parse(req, async (err, fields, files)=>{
    const prompt = fields.prompt || fields.text || ''
    let image_url = null
    if(files && files.image){
      const buf = fs.readFileSync(files.image.filepath)
      const upl = await uploadBuffer(buf, files.image.originalFilename)
      image_url = upl.secure_url
    }
    // call AI for caption instructions
    const ai = await textResponse(`Create status content for: ${prompt} ${image_url?('Image:'+image_url):''}`)
    res.json({ output: ai, image_url })
  })
}
