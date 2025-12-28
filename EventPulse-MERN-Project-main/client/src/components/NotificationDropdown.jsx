import React from 'react';

    const NotificationDropdown = ({ notifications, onClose }) => {
      return (
        <div className="absolute top-12 right-20 w-80 bg-white dark:bg-gray-700 shadow-2xl rounded-xl overflow-hidden border dark:border-gray-600 z-50 animate-fadeIn">
          {/* Header */}
          <div className="p-3 font-bold border-b dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
            <span>Notifications</span>
            <button onClick={onClose} className="text-xs text-blue-500 hover:underline">Close</button>
          </div>

          {/* List */}
          <div className="max-h-64 overflow-y-auto custom-scrollbar">
            {notifications.length === 0 ? (
              <p className="p-4 text-sm text-gray-500 dark:text-gray-400 text-center">No new alerts.</p>
            ) : (
              notifications.map((n) => (
                <div key={n._id} className={`p-3 border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition ${!n.isRead ? 'bg-blue-50 dark:bg-gray-600 border-l-4 border-blue-500' : ''}`}>
                  <div className="flex justify-between items-start">
                      <span className="font-bold text-sm text-gray-800 dark:text-gray-200">{n.fromUserName}</span>
                      <span className="text-[10px] text-gray-400">{new Date(n.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{n.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      );
    };

    export default NotificationDropdown;