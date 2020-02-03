import React from 'react';
import { shallow } from 'enzyme';

import Login from './login.tsx';

describe('Login', () => {
    it('renders the h1 title', () => {
        const login = shallow(<Login />)
        expect(login.find('h1').text()).toEqual('Login')
    })

    it('renders the form', () => {
        const login = shallow(<Login />)
        expect(login.find('form')).toHaveLength(1)
    })

    it('changes the text of email', () => {
        const login = shallow(<Login />)
        login.find('#formEmail').simulate('change', {
          target: {
            name: 'email',
            value: 'some@test.com',
          },
        })
        expect(
          login
            .update()
            .find('#formEmail')
            .props().value
        ).toEqual('some@test.com')
      })

      it('changes the text of password', () => {
        const login = shallow(<Login />)
        login.find('#formPassword').simulate('change', {
          target: {
            name: 'password',
            value: 'test',
          },
        })
        expect(
          login
            .update()
            .find('#formPassword')
            .props().value
        ).toEqual('test')
      })
    
      it('changes the text of login button after clicking it', () => {
        const login = shallow(<Login />)
        login.find('#loginSubmit').simulate('click', { preventDefault() {} })
        expect(
          login
            .update()
            .find('#loginSubmit')
            .text()
        ).toEqual('Logging in...')
      })

})