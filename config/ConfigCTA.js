const ConfigCTA = {};

ConfigCTA.CTA_MESSAGE_REQUEST_ERROR = {
    title: "Sorry",
    message:
       "Terjadi kesalahan saat memproses data. Silahkan periksa kembali informasi yang Anda masukkan dan pastikan semuanya diisi dengan benar.",
    };
    
ConfigCTA.CTA_MESSAGE_SIGNIN_ERROR = {
    title: "Sorry",
    message:
      "Terjadi kesalahan saat masuk. Periksa kembali email dan kata sandi Anda, pastikan semuanya benar.",
  };
  
  ConfigCTA.CTA_MESSAGE_SUCCESS_SIGNUP = {
    title: "Sukses!",
    message: "Anda berhasil melakukan pendaftaran. Silahkan sign in untuk masuk.",
  };
  
  ConfigCTA.CTA_MESSAGE_TOKEN_ERROR = {
    title: "Sorry",
    message:
      "Anda perlu menyertakan token untuk proses otentikasi atau Anda bisa melakukan sign in ulang.",
  };
  
  ConfigCTA.CTA_MESSAGE_TOKEN_INVALID = {
    title: "Sorry",
    message:
      "Mohon maaf, sesi login Anda telah berakhir. Silakan signin kembali.",
  };
  
  ConfigCTA.CTA_MESSAGE_SUCCESS_CREATE = {
    title: "Sukses!",
    message: "Data berhasil ditambahkan.",
  };
  
  ConfigCTA.CTA_MESSAGE_SUCCESS_UPDATE = {
    title: "Sukses!",
    type: "success",
    message: "Data berhasil diperbarui.",
  };
  
  ConfigCTA.CTA_MESSAGE_SUCCESS_DELETE = {
    title: "Sukses!",
    message: "Data berhasil dihapus.",
  };
  
  ConfigCTA.CTA_MESSAGE_ERROR_DELETE = {
    title: "Perhatian!",
    message:
      "Data ini terikat oleh data lainnya di dalam sistem dan tidak dapat dihapus.",
  };
  
  module.exports = ConfigCTA;
