import axios from 'axios'
export async function Telesticker(url) {
  return new Promise(async (resolve, reject) => {
    if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) throw 'Enter your url telegram sticker'
    const packName = url.replace('https://t.me/addstickers/', '')
    const data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: 'GET', headers: { 'User-Agent': 'GoogleBot' } })
    const hasil = []
    for (let i = 0; i < data.data.result.stickers.length; i++) {
      const fileId = data.data.result.stickers[i].thumb.file_id
      const data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
      const result = {
        status: 200,
        author: 'Xfarr05',
        url: `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${data2.data.result.file_path}`,
      }
      hasil.push(result)
    }
    resolve(hasil)
  })
}
