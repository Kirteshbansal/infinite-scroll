import api from "../axios";
import apiEndPoints from "../apiEndPoints";
import { somethingWentWrong } from "../../utils/messages";

export const fetchFeedData = async (page = 1) => {
    try {
        const apiPath = apiEndPoints.feedData.replace(":pageId", page);
        const res = await api(apiPath);
        if (res.status !== 200) {
            throw new Error(somethingWentWrong);
        }
        return res;
    } catch (err) {
        console.error("err >>", err.message);
        return err.message;
    }
};
