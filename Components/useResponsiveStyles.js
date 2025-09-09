import { useWindowDimensions, StyleSheet } from 'react-native';

export const useResponsiveStyles = () => {
  const { width } = useWindowDimensions();

  const isSmallScreen = width <= 600;

  const scaleFont = (size) => {
    if (isSmallScreen) {
      return size;
    }
    // Ajusta a fonte proporcionalmente para telas maiores
    const scaleFactor = Math.min(width / 375, 1.1);
    return size * scaleFactor;
  };
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: isSmallScreen ? 10 : 20,
      backgroundColor: '#fff',
    },
    headerText: {
      fontSize: scaleFont(20),
      marginBottom: isSmallScreen ? 15 : 20,
      fontWeight: 'bold',
      color: '#333',
    },
    headerContainer: {
      fontSize: scaleFont(26),
      marginBottom: isSmallScreen ? 18 : 22,
      fontWeight: 'bold',
      color: '#333',
    },
    taskItem: {
      paddingVertical: isSmallScreen ? 10 : 20,  // aumenta padding vertical em telas grandes
      paddingHorizontal: isSmallScreen ? 10 : 15,
      marginBottom: 10,
      borderRadius: 5,
      flex: 1,
      marginHorizontal: 5,
      justifyContent: 'center',
      minHeight: isSmallScreen ? 50 : 70,        // define altura mínima maior em telas grandes
    },
    taskText: {
      fontSize: scaleFont(18),
    },
    completedBackground: {
      backgroundColor: '#a0e7a0',
    },
    pendingBackground: {
      backgroundColor: '#eee',
    },
    // Container da lista que muda layout
    listContainerSingleColumn: {
      flexDirection: 'column',
      paddingHorizontal: 0,
    },
    listContainerTwoColumns: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 5,
    },
  });
};
