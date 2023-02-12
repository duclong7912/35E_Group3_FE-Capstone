import axios from "axios";

export const regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/
export const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export const config = {
    setCookie: (name:string, value:string, days:number) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: (name:string) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie: (name:string) => {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    getStore: (name:string) => {
        if (localStorage.getItem(name)) {
            return localStorage.getItem(name);
        }
        return null;
    },
    setStore: (name:string, value:any) => {
        localStorage.setItem(name, value);
    },
    setStoreJson: (name:string, value:any) => {
        let json = JSON.stringify(value);
        localStorage.setItem(name, json);
    },
    getStoreJson: (name:string) => {
        if (localStorage.getItem(name)) {
            let result:any = localStorage.getItem(name);
            return JSON.parse(result);
        }
        return null;
    },
    removeLocalStorage: (name:string) => {
        localStorage.removeItem(name)
    },
    ACCESS_TOKEN: 'accessToken',
    USER_LOGIN: 'userLogin',
    ROLE: "role"
}

export const { setCookie, getCookie, getStore, setStore, setStoreJson, getStoreJson, eraseCookie, removeLocalStorage, ACCESS_TOKEN, USER_LOGIN, ROLE } = config;

const DOMAIN = 'https://fiverrnew.cybersoft.edu.vn/api';
const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNUUiLCJIZXRIYW5TdHJpbmciOiIwNy8wNi8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODYwOTYwMDAwMDAiLCJuYmYiOjE2NTczODYwMDAsImV4cCI6MTY4NjI0MzYwMH0.XsCcIZvawxcwye8KVYB2vJK4d3Gbr1XROtNyAL8nypA';

/* Cấu hình request cho tất cả api - response cho tất cả kết quả từ api trả về */

//Cấu hình domain gửi đi
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})
//Cấu hình request header
http.interceptors.request.use(
    (config:any) => {
        const token = getStore(ACCESS_TOKEN);
        config.headers = {
            ...config.headers,
            ['token']: `${token}`,
            ['Authorization']: `${token}`,
            ['TokenCybersoft']: TOKEN_CYBERSOFT
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)
//Cấu hình kết quả trả về
http.interceptors.response.use((response) => {
    // console.log(response);
    return response;
}, err => {
    // const originalRequest = error.config;
    console.log(err.response.status);
    if(err.response.status === 400 || err.response.status === 404) {
        // history.push('/');
        return  Promise.reject(err);
    }
    if(err.response.status === 401 || err.response.status === 403) {
        // alert('Token không hợp lệ ! Vui lòng đăng nhập lại !');
        // history.push('/login');
        return Promise.reject(err)
    }
})
/**
 * status code
 * 400: Tham số gửi lên không hợp lệ => kết quả không tìm được (Badrequest);
 * 404: Tham số gửi lên hợp lệ nhưng không tìm thấy => Có thể bị xoá rồi (Not found) ... 
 * 200: Thành công, OK
 * 201: Đã được tạo thành công => (Mình đã tạo rồi sau đó request tiếp thì sẽ trả 201) (Created)
 * 401: Không có quyền truy cập vào api đó (Unauthorize - Có thể do token không hợp lệ hoặc bị admin chặn )
 * 403: Chưa đủ quyền truy cập vào api đó (Forbiden - token hợp lệ tuy nhiên token đó chưa đủ quyền truy cập vào api)
 * 500: Lỗi xảy ra tại server (Nguyên nhân có thể frontend gửi dữ liệu không hợp lệ => backend trong quá trình xử lý code gây ra lỗi hoặc do backend code bị lỗi => Error in server )
 */ 