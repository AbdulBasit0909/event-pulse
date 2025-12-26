import Notification from "../models/Notification.js";

/* GET USER NOTIFICATIONS */

    export const getUserNotifications = async (req, res) => {
      try {
        const { userId } = req.params;

        // 1. Validation Checks (Added for robustness)
        if (!userId) {
            console.error("Notification Error: Missing userId param");
            return res.status(400).json({ message: "User ID is required" });
        }

        // 2. Fetch from DB with sorting
        // We sort by createdAt -1 to ensure latest alerts appear first
        const notifications = await Notification.find({ userId })
            .sort({ createdAt: -1 })
            .limit(50); // Optimization: Limit to last 50 to prevent payload bloat

        // 3. Return response
        res.status(200).json(notifications);

      } catch (err) {
        console.error(`Error fetching notifications for user ${req.params.userId}:`, err);
        res.status(500).json({ message: "Internal Server Error fetching notifications" });
      }
    };

/* MARK AS READ */
export const markNotificationsRead = async (req, res) => {
    try {
        const { userId } = req.params;
        await Notification.updateMany({ userId }, { isRead: true });
        res.status(200).json({ message: "Marked as read" });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}