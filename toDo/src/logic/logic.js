/**
     * This function make de hash that allow to identificate a specific task
     * @param {string} title identificator of task that we will make hash for it 
     * @returns the hash
     */
async function generateTaskId(title) {
    const encoder = new TextEncoder();
    const data = encoder.encode(title);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex
}


/**
 * That function remove a spesific task amogn all the task
 * @param {string} id is the hash of the task that allow to find it 
 */
function removeTask(id) {
    let task = document.getElementById(id);
    if (task) {
        task.remove();
        console.log('The task has been deleted correctly');
    }
}

export {generateTaskId, removeTask}