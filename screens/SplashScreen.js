import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Ellipse, Rect } from 'react-native-svg';

const { width: screenWidth, height } = Dimensions.get('window');
const width = Platform.OS === 'web' ? 390 : screenWidth;

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('RoleSelection');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6B5FED', '#5347D8']}
        style={styles.gradient}
      >
        {/* Main Content */}
        <View style={styles.content}>
          {/* Graduation Cap Icon */}
          <View style={styles.iconContainer}>
            <Svg width="90" height="80" viewBox="0 0 90 80" fill="none">
              {/* Top flat board (diamond/square rotated) */}
              <Path
                d="M45 15 L75 30 L45 45 L15 30 Z"
                fill="white"
              />
              
              {/* Bottom cap body (isometric cube side) */}
              <Path
                d="M45 45 L75 30 L75 55 L45 70 Z"
                fill="rgba(255, 255, 255, 0.85)"
              />
              
              {/* Left side of cap body */}
              <Path
                d="M15 30 L45 45 L45 70 L15 55 Z"
                fill="rgba(255, 255, 255, 0.7)"
              />
              
              {/* Tassel ribbon on left side */}
              <Path
                d="M18 35 L22 33 L22 62 L18 64 Z"
                fill="white"
              />
            </Svg>
          </View>

          {/* App Name */}
          <Text style={styles.appName}>CampusSync</Text>
          
          {/* Tagline */}
          <Text style={styles.tagline}>Your Campus. In Sync.</Text>
          
          {/* Features */}
          <Text style={styles.features}>Rooms · Events · Help · Lost & Found</Text>
        </View>

        {/* Bottom Illustration */}
        <View style={styles.bottomIllustration}>
          {/* Dark Mountain Layers - Two distinct shaded mountains */}
          <Svg height="500" width={width} style={styles.mountainSvg} viewBox={`0 0 ${width} 500`}>
            {/* First lighter mountain layer (purple-ish) - lowered */}
            <Path
              d={`M0,250 Q${width*0.2},200 ${width*0.4},235 Q${width*0.6},270 ${width*0.8},230 Q${width*0.9},220 ${width},255 L${width},500 L0,500 Z`}
              fill="rgba(70, 85, 170, 0.5)"
            />
            
            {/* Second darker mountain layer (more blue) - lowered */}
            <Path
              d={`M0,310 Q${width*0.25},265 ${width*0.5},300 Q${width*0.75},335 ${width},290 L${width},500 L0,500 Z`}
              fill="rgba(45, 60, 135, 0.65)"
            />
            
            {/* Single light wavy stroke line - positioned around middle mountains */}
            <Path
              d={`M0,280 Q${width*0.2},235 ${width*0.4},270 Q${width*0.6},305 ${width*0.8},265 Q${width*0.9},255 ${width},285`}
              stroke="rgba(150, 160, 240, 0.7)"
              strokeWidth="2"
              fill="none"
            />
          </Svg>

          {/* Campus Building and Trees - Positioned at very bottom */}
          <View style={styles.campusContainer}>
            {/* Left Trees - even more space from building */}
            <View style={[styles.tree, { left: 30 }]} />
            <View style={[styles.tree, { left: 60, height: 75 }]} />

            {/* Campus Building */}
            <View style={styles.buildingWrapper}>
              {/* Roof Triangle with detailed edge */}
              <View style={styles.roofContainer}>
                <View style={styles.roof} />
                {/* Roof decorative edge */}
                <View style={styles.roofEdge}>
                  {[...Array(15)].map((_, i) => (
                    <View key={i} style={styles.roofTooth} />
                  ))}
                </View>
              </View>
              
              {/* Building Body with columns */}
              <View style={styles.buildingBody}>
                {[...Array(7)].map((_, i) => (
                  <View key={i} style={styles.column} />
                ))}
              </View>
              
              {/* Building Base with steps */}
              <View style={styles.baseContainer}>
                <View style={styles.buildingBaseTop} />
                <View style={styles.buildingBase} />
              </View>
            </View>

            {/* Right Trees - even more space from building */}
            <View style={[styles.tree, { right: 60, height: 75 }]} />
            <View style={[styles.tree, { right: 30 }]} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 250,
  },
  iconContainer: {
    marginBottom: 25,
  },
  appName: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    letterSpacing: 0.5,
    fontFamily: 'Inter_700Bold',
  },
  tagline: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: 25,
    fontFamily: 'Inter_400Regular',
  },
  features: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: 'Inter_400Regular',
  },
  bottomIllustration: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 500,
  },
  mountainSvg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  campusContainer: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 150,
  },
  tree: {
    position: 'absolute',
    bottom: 5,
    width: 30,
    height: 70,
    backgroundColor: 'rgba(100, 120, 190, 0.6)',
    borderRadius: 15,
  },
  buildingWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  roofContainer: {
    alignItems: 'center',
  },
  roof: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 130,
    borderRightWidth: 130,
    borderBottomWidth: 38,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(110, 130, 210, 0.55)',
  },
  roofEdge: {
    flexDirection: 'row',
    width: 260,
    height: 8,
    backgroundColor: 'rgba(110, 130, 210, 0.55)',
    justifyContent: 'space-between',
  },
  roofTooth: {
    width: 14,
    height: 8,
    backgroundColor: 'rgba(95, 115, 195, 0.5)',
  },
  buildingBody: {
    width: 260,
    height: 82,
    backgroundColor: 'rgba(100, 120, 200, 0.55)',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  column: {
    width: 24,
    height: 66,
    backgroundColor: 'rgba(115, 135, 215, 0.6)',
  },
  baseContainer: {
    alignItems: 'center',
  },
  buildingBaseTop: {
    width: 280,
    height: 8,
    backgroundColor: 'rgba(110, 130, 210, 0.55)',
  },
  buildingBase: {
    width: 300,
    height: 15,
    backgroundColor: 'rgba(105, 125, 205, 0.55)',
  },
});
