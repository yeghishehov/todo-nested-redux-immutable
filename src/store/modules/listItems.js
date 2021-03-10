import { fromJS, List } from 'immutable';

const ADD_NEW_ITEM = 'todo/ADD_NEW_ITEM';
const COMPLETE_ITEM = 'todo/COMPLETE_ITEM';
const REMOVE_COMPLETED_ITEM = 'todo/REMOVE_COMPLETED_ITEM';

const initialState = fromJS([{
  title: 'head',
  data: [],
  completed: false
}]);

export const addNewItem = (payload) => ({ type: ADD_NEW_ITEM, payload });
export const addNestedItem = (payload) => ({ type: COMPLETE_ITEM, payload });
export const remove = (payload) => ({ type: REMOVE_COMPLETED_ITEM, payload });

export default function reducer (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_ITEM: 
      const destination = payload.parent.reduce((acc, part) => 
        acc.push(part).push('data'),
        List()
      );
      return state.updateIn(
        destination,
        data => data.push(fromJS({ title: payload.item, data: [], completed: false })));
    case COMPLETE_ITEM:
      return state;
    case REMOVE_COMPLETED_ITEM:
      return state;
    default: return state;
  }
};


// function addNewItem(title, subTitle, item) {
//   if (title) return state.map((stateItem) =>
//   stateItem.title === title
//     ? {
//         ...stateItem,
//         items: [ ...stateItem.items, { title: item, completed: false } ],
//       }
//     : stateItem)
//   if (subTitle) return state.map((stateItem) =>
//     stateItem.title === title
//     ? stateItem.map((subItem) =>
//         subItem.title === subTitle
//           ? {
//             ...subItem,
//             items: [ ...subItem.items, { title: item, completed: false } ],
//           }
//           : subItem
//       )
//     : stateItem
//   )
//   return [ ...state, { title: item, completed: false } ]
// }

// function completeItem(title, subTitle, item) {
//   if (title) return state.map((stateItem) =>
//   stateItem.title === title
//     ? stateItem.items.map()
//         items: [ ...stateItem.items, { title: item, completed: false } ],
//       }
//     : stateItem)
//   if (subTitle) return state.map((stateItem) =>
//     stateItem.title === title
//     ? stateItem.map((subItem) =>
//         subItem.title === subTitle
//           ? {
//             ...subItem,
//             items: [ ...subItem.items, { title: item, completed: false } ],
//           }
//           : subItem
//       )
//     : stateItem
//   )
//   return state.map((stateItem) =>
//     stateItem.title === item
//       ? { ...stateItem, completed: !stateItem.completed }
//       : stateItem
//   )
// }



[
  {title: 'sss', lists: [
    {title: 'sss', lists: [
      {title: 'sss', lists}
    ]}  
  ]}
  {title: 'sss', lists}
  {title: 'sss', lists}
  {title: 'sss', lists}
  {title: 'sss', lists}
].