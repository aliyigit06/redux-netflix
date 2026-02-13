const Error = ({ message }) => {
  return (
    <div className="text-center text-zinc-300 my-10">
      <p>Üzgünüz bir hata oluştu</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;