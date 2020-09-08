import { shallow } from 'enzyme'
import React from 'react'
import PreviewCollection from './preview-collection.component'

describe('Header Component', () => {

    it('Shows X items', () => {
        //Arrange
        const props = {
            title: 'Collection Name',
            items: [
                {
                    id: '1',
                    name: 'Any item'
                },
                {
                    id: '2',
                    name: 'Any item'
                },
                {
                    id: '3',
                    name: 'Any item'
                },
                {
                    id: '4',
                    name: 'Any item'
                },
                {
                    id: '5',
                    name: 'Any item'
                },
                {
                    id: '6',
                    name: 'Any item'
                }
            ],
            itemCount: 4
        };

        //Act
        const wrapper = shallow(<PreviewCollection {...props} />);
        const previewDiv = wrapper.find('.preview').at(0);
        const collectionItemCount = previewDiv.children().length;
        // //Assert
        expect(collectionItemCount).toEqual(props.itemCount);
    })

    it('matches snapshot', () => {
        const wrapper = shallow(<PreviewCollection title={'Any title'} items={[]} />);
        expect(wrapper.render()).toMatchSnapshot()
    })

})
