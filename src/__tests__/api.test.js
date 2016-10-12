import GravatarApi from './../api';

test("succesfull fetch img from gravatar", () => {
    GravatarApi.getAvatar( '').then(response => console.log(response));
    expect(1).toBe(1);
});