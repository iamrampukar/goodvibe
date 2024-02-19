import nextconnect from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  updateCarousel,
  deleteCarousel,
  getCarouselDetails,
} from "../../../backend/controller/homecarousel";
import cors from "cors";
const handler = nextconnect();

dbConnect();
handler
  .get(getCarouselDetails)
  .put(updateCarousel)
  .delete(deleteCarousel)
  .use(
    cors({
      origin:[ "https://goodvibes.com.np",]
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
