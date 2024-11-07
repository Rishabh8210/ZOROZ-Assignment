import React from 'react'
import './css/ShimerCardCss.css';
const ShimerBooksCard = () => {
    return (
        // Container for the shimmer card with applied styles and shimmer animation
        <div className="max-w-sm  bg-white rounded overflow-hidden shadow-lg bg-gradient-to-tr from-gray-400 to-gray-300 animate-shimmer flex-shrink-0">
          {/* Placeholder for image, aspect ratio set to 9:12 */}
          <div className="w-full aspect-[9/12]"></div>
          {/* Placeholder for title (empty text to simulate shimmer) */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"></div>
            <p className="text-gray-700 text-base">
              {/* Empty paragraph to represent loading text */}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
             {/* Placeholder for tags or categories, styled as pill-shaped tags */}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
          </div>
          <div className="px-6 pt-4 pb-2">
            {/* Empty div to simulate other content in the card (e.g., action buttons) */}
          </div>
        </div>
      );
}

export default ShimerBooksCard