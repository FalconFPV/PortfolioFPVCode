import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function Number({ mv, number, height }) {
   let y = useTransform(mv, (latest) => {
      let placeValue = latest % 10;
      let offset = (10 + number - placeValue) % 10;
      let memo = offset * height;
      if (offset > 5) {
         memo -= 10 * height;
      }
      return memo;
   });
   return (
      <motion.span className="counter-number" style={{ y }}>
         {number}
      </motion.span>
   );
}

function Digit({ place, value, height, digitStyle }) {
   let valueRoundedToPlace = Math.floor(value / place);
   let animatedValue = useSpring(valueRoundedToPlace);
   useEffect(() => {
      animatedValue.set(valueRoundedToPlace);
   }, [animatedValue, valueRoundedToPlace]);
   return (
      <div className="counter-digit" style={{ height, ...digitStyle }}>
         {Array.from({ length: 10 }, (_, i) => (
            <Number key={i} mv={animatedValue} number={i} height={height} />
         ))}
      </div>
   );
}

export default function Counter({
   value: targetValue,
   fontSize = 100,
   padding = 0,
   places = [100, 10, 1],
   gap = 8,
   borderRadius = 4,
   horizontalPadding = 8,
   textColor = "white",
   fontWeight = "bold",
   containerStyle,
   counterStyle,
   digitStyle,
   gradientHeight = 16,
   gradientFrom = "var(--imp-background-color)",
   gradientTo = "transparent",
   topGradientStyle,
   bottomGradientStyle,
   duration = 2, // Duración de la animación en segundos
}) {
   const [currentValue, setCurrentValue] = useState(0);
   const height = fontSize + padding;

   useEffect(() => {
      let start = null;
      const animate = (timestamp) => {
         if (!start) start = timestamp;
         const progress = Math.min((timestamp - start) / (duration * 1000), 1);
         setCurrentValue(Math.floor(progress * targetValue));
         if (progress < 1) {
            requestAnimationFrame(animate);
         }
      };
      requestAnimationFrame(animate);
   }, [targetValue, duration]);

   const defaultCounterStyle = {
      fontSize,
      gap: gap,
      borderRadius: borderRadius,
      paddingLeft: horizontalPadding,
      paddingRight: horizontalPadding,
      color: textColor,
      fontWeight: fontWeight,
   };
   const defaultTopGradientStyle = {
      height: gradientHeight,
      background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
   };
   const defaultBottomGradientStyle = {
      height: gradientHeight,
      background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
   };

   return (
      <div className="counter-container" style={containerStyle}>
         <div
            className="counter-counter"
            style={{ ...defaultCounterStyle, ...counterStyle }}
         >+
            {places.map((place) => (
               <Digit
                  key={place}
                  place={place}
                  value={currentValue}
                  height={height}
                  digitStyle={digitStyle}
               />
            ))}
         </div>
         <div className="gradient-container">
            <div
               className="top-gradient"
               style={
                  topGradientStyle ? topGradientStyle : defaultTopGradientStyle
               }
            ></div>
            <div
               className="bottom-gradient"
               style={
                  bottomGradientStyle
                     ? bottomGradientStyle
                     : defaultBottomGradientStyle
               }
            ></div>
         </div>
      </div>
   );
}
