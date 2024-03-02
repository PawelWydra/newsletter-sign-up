function FeatureList() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <img
          className="self-start"
          src={process.env.PUBLIC_URL + "/images/icon-list.svg"}
          alt="checkmark"
        />
        <p>Product discovery and building what matters</p>
      </div>
      <div className="flex gap-4">
        <img
          className="self-start"
          src={process.env.PUBLIC_URL + "/images/icon-list.svg"}
          alt="checkmark"
        />
        <p>Measuring to ensure updates are a success</p>
      </div>
      <div className="flex gap-4">
        <img
          className="self-start"
          src={process.env.PUBLIC_URL + "/images/icon-list.svg"}
          alt="checkmark"
        />
        <p>And much more!</p>
      </div>
    </div>
  );
}

export default FeatureList;
