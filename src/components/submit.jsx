function Submit({ toggleSubmit, email}) {
  return (
    <div className="h-[25rem] w-96 rounded-3xl flex flex-col gap-4 p-6 md:p-10 bg-white">
      <img
        className="self-start size-12"
        src={process.env.PUBLIC_URL + "/images/icon-list.svg"}
        alt="checkmark"
      />
      <h1 className="text-2xl md:text-4xl font-robotoBold">Thanks for subscribing </h1>
      <p className="text-sm md:text-base">
        A confirmation e-mail has been send to{" "}
        <span className="font-robotoBold">{email}.</span> Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button
       onClick={toggleSubmit} className="w-full min-h-14 mt-4 text-white text-sm bg-[#242742] rounded-lg hover:cursor-pointer hover:bg-gradient-to-r hover:from-rose-500 hover:to-[#ff6257]"
      > Dismiss message</button>
    </div>
  );
}

export default Submit;
