import {StyleSheet} from 'react-native';

export const updateStyle = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    paddingTop: 0,
    width: '95%',
    backgroundColor: 'burlywood',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 25,
    height: 650,
  },
  closeModalDiv: {
    width: '100%',
    alignItems: 'flex-end',
    height: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeIcon: {
    alignItems: 'flex-end',
  },
  propertiesDiv: {
    paddingTop: 0,
    backgroundColor: 'beige',
    height: 622,
    borderWidth: 3,
    borderColor: 'cornflowerblue',
    borderRadius: 20,
    elevation: 10,
  },
  issueIdText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'chocolate',
    alignSelf: 'center',
  },
  secondaryDiv: {
    flexDirection: 'row',
    width: '95%',
    borderWidth: 1,
    borderColor: 'cadetblue',
    alignSelf: 'center',
    height: 450,
    borderRadius: 20,
    backgroundColor: 'bisque',
  },
  secondaryDivFirst: {
    marginTop: 3,
    marginLeft: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'cadetblue',
    borderRadius: 20,
    height: 444,
    width: '65%',
    backgroundColor: 'antiquewhite',
  },
  secondaryDivSecond: {
    marginTop: 3,
    marginHorizontal: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'cadetblue',
    borderRadius: 20,
    height: 444,
    width: '32%',
    backgroundColor: 'darkkhaki',
  },
  updateButton: {
    width:60,
    borderWidth:2,
    borderColor:'cadetblue',
    height:40,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'darkgreen',
  }
});
