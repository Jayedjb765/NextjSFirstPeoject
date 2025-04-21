import React from "react";

const DianamicPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  console.log(await searchParams);

  return (
    <div>
      <h1 className="text-3xl text-center">
        This is dynamc product page {productId}
      </h1>
    </div>
  );
};

export default DianamicPage;
