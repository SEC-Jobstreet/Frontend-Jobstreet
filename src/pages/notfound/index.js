import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Không tìm thấy đường dẫn này</title>
      </Helmet>
      <div>Page Not Found</div>
    </>
  );
}

export default NotFound;
