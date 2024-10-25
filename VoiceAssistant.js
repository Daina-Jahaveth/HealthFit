// Ubicación: /client/src/components/VoiceAssistant.js
import { Canvas } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/three';

const VoiceAssistant = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { scale } = useSpring({ scale: isSpeaking ? 1.2 : 1 });

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript;
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 1000);
      console.log(transcript);
    };

    recognition.start();
  }, []);

  return (
    <Canvas>
      <animated.mesh scale={scale}>
        <circleBufferGeometry args={[1, 64]} />
        <meshBasicMaterial color={isSpeaking ? 'green' : 'blue'} />
      </animated.mesh>
    </Canvas>
  );
};

export default VoiceAssistant;
