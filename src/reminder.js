/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  let reminder = new Promise((resolve, reject) => {
    setTimeout(() => {
      let fulfilled = true
      if (fulfilled) {
        console.log("This is your reminder!")
        resolve()
      } else {
        reject()
      }   
    }, delay)
  })

  // Return a promise
  // Use setTimeout to log the message after the specified delay
  // Resolve the promise once the message is logged
}

module.exports = { delayedReminder };