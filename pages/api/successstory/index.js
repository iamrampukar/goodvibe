import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createSuccessStory,
  getAllSuccessStory,
} from "../../../backend/controller/successstory";
import cors from 'cors'
const handler = nextconnect();
dbConnect();
handler.post(createSuccessStory).get(getAllSuccessStory).use(
  cors({
    origin: ["https://goodvibes.com.np","http://localhost:3000"]
  })
);

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '3000000000mb' // Set desired value here
      }
  }
}
export default handler;
