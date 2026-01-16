import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
    const { scrollY } = useScroll();

    // Create different movement speeds for different layers
    const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 100]);
    const rotate = useTransform(scrollY, [0, 1000], [0, 180]);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', pointerEvents: 'none', zIndex: -1 }}>
            {/* Circle 1 - Top Left */}
            <motion.div
                style={{
                    y: y1,
                    rotate,
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 242, 234, 0.15) 0%, transparent 60%)',
                    filter: 'blur(40px)',
                }}
            />

            {/* Circle 2 - Bottom Right */}
            <motion.div
                style={{
                    y: y2,
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, transparent 60%)',
                    filter: 'blur(50px)',
                }}
            />

            {/* Circle 3 - Center Left */}
            <motion.div
                style={{
                    y: y3,
                    position: 'absolute',
                    top: '40%',
                    left: '20%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 0, 85, 0.1) 0%, transparent 60%)',
                    filter: 'blur(30px)',
                }}
            />
        </div>
    );
}
