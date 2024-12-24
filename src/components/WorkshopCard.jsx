import { motion } from 'framer-motion';
import { useState } from 'react';
import WorkshopDetails from './WorkshopDetails';
import ImageWithFallback from './ImageWithFallback';
import './WorkshopCard.css';

const WorkshopCard = ({ workshop }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="workshop-card"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
      >
        {/* Date at the top-right corner */}
        <div className="workshop-card-date">
          {new Date(workshop.dateTime).toLocaleDateString()}
        </div>

        <ImageWithFallback
          src={workshop.imageUrl}
          alt={workshop.collegeName}
          className="workshop-card-image"
        />
        <div className="workshop-card-content">
          <h3>{workshop.workshopName}</h3>
          <h4>"{workshop.collegeName}"</h4>
        </div>
      </motion.div>

      {isOpen && (
        <WorkshopDetails
          workshop={workshop}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WorkshopCard;
