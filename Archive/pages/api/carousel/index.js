import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  createHomeCarousel,
  getAllCarousel,
} from "../../../backend/controller/homecarousel";
import cors from "cors";
const handler = nextconnect();
dbConnect();
handler
  .post(createHomeCarousel)
  .get(getAllCarousel)
  .use(
    cors({
      origin: ["https://goodvibes.com.np",]
    })
  );

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "300000000mb", // Set desired value here
    },
  },
};
export default handler;
