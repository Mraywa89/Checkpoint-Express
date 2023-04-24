module.exports.VerifyTime = (req, res, next) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay();
  
    if (
      currentHour >= 9 &&
      currentHour <= 17 &&
      currentDay >= 1 &&
      currentDate <= 5
    ) {
      return res.status(200).json({ msg: "validate" });
    } else {
      return res.status(403).json({ msg: "out of working hours" });
    };
    next();
  };