const tasksData = {
    totalTasks: 50,
    tasks: Array.from({ length: 50 }, (_, i) => {
        const titles = [
            "Buy groceries", "Finish project", "Call mom", "Read a book", "Exercise",
            "Clean the house", "Fix the sink", "Plan vacation", "Write blog post",
            "Prepare presentation", "Attend meeting", "Water the plants", "Reply emails",
            "Go to the doctor", "Walk the dog", "Cook dinner", "Learn React",
            "Check bank balance", "Organize files", "Update resume", "Meditate",
            "Pay bills", "Order supplies", "Schedule dentist appointment",
            "Watch tutorial", "Review notes", "Practice coding", "Do laundry",
            "Write journal entry", "Plan birthday party", "Renew car insurance",
            "Buy gifts", "Sort photos", "Grocery shopping", "Fix bicycle",
            "Declutter workspace", "Backup files", "Review investments",
            "Plan family outing", "Attend conference", "Donate clothes",
            "Study for exam", "Refill prescription", "Set fitness goals",
            "Plan weekly meals", "Check tire pressure", "Volunteer at shelter",
            "Visit grandparents", "Complete survey", "Update software"
        ];
        return {
            id: i + 1,
            title: titles[Math.floor(Math.random() * titles.length)],
            isTaskDone: Math.random() > 0.5, // 50% probabilidad de estar completada
        };
    })
};

export default tasksData;
