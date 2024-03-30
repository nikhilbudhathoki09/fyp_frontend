export const generateTimeOptions = () => {
  const options = [{ label: "Pick Time", value: null }];

  let startTime = new Date();
  startTime.setHours(0, 0, 0, 0); // Set to midnight

  for (let i = 0; i < 48; i++) {
    // 48 intervals for 24 hours
    const time = new Date(startTime.getTime() + i * 30 * 60000); // Increment by 30 minutes
    const hours = (time.getHours() % 12 || 12).toString(); // Convert to 12-hour format
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const ampm = time.getHours() >= 12 ? "PM" : "AM";
    const timeString = hours + ":" + minutes + " " + ampm;
    options.push({ label: timeString, value: timeString });
  }

  return options;
};
