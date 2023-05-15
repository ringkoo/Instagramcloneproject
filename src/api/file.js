import axios from "axios";
import Cookies from "js-cookie";

const uploadimagePost = async () => {
    const token = Cookies.get('token')
    const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}`
    )
}