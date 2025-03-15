/**
 * Make the has of the task
 * @param {string} key is the title of the task 
 * @returns the easy hash with the title of the task
 */
function generateTaskId(key) {
    const splittedWrod = key.toLowerCase().split('');
    const codes = splittedWrod.map((char) => {
        return `${char}${String(char).charCodeAt(0)}`
    })
    return codes.join('');
}

export { generateTaskId }