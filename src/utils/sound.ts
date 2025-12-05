// Simple notification sound utility
export function playNotificationSound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create oscillator for the beep sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Set frequency for a pleasant notification sound (similar to system sounds)
    oscillator.frequency.value = 800; // Hz
    oscillator.type = 'sine';
    
    // Set volume
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    // Play the sound
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (error) {
    // Silently fail if audio context is not supported
    console.log('Audio playback not supported');
  }
}

// Alternative: Two-tone notification sound (more like Windows/Linux)
export function playWindowPopSound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // First tone
    const oscillator1 = audioContext.createOscillator();
    const gainNode1 = audioContext.createGain();
    
    oscillator1.connect(gainNode1);
    gainNode1.connect(audioContext.destination);
    
    oscillator1.frequency.value = 600;
    oscillator1.type = 'sine';
    
    gainNode1.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator1.start(audioContext.currentTime);
    oscillator1.stop(audioContext.currentTime + 0.1);
    
    // Second tone (slightly higher)
    const oscillator2 = audioContext.createOscillator();
    const gainNode2 = audioContext.createGain();
    
    oscillator2.connect(gainNode2);
    gainNode2.connect(audioContext.destination);
    
    oscillator2.frequency.value = 800;
    oscillator2.type = 'sine';
    
    gainNode2.gain.setValueAtTime(0.2, audioContext.currentTime + 0.08);
    gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator2.start(audioContext.currentTime + 0.08);
    oscillator2.stop(audioContext.currentTime + 0.2);
  } catch (error) {
    console.log('Audio playback not supported');
  }
}
