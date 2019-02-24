import AppToggleButton from "~/components/AppToggleButton";
import { mount }       from "@vue/test-utils";

describe('AppToggleButton', () => {

  let wrapper;

  beforeEach(() => {
    // wrapper を null に設定し、GCされるようにする。
    wrapper = null;
    // wrapper に vue コンポーネントのマウント結果を代入して使い回す
    wrapper = mount(AppToggleButton);
  });

  test('デフォルト状態で off であるか', () => {
    expect(wrapper.find('p').text()).toBe('off');
    // findメソッドで、this.$el 内から探査された p 要素をデータソースとしてアサーションを行う

  });

  test('ボタンを押すことによって on となるか', () => {
    wrapper.find('button').trigger('click'); // クリックイベントを発火
    expect(wrapper.find('p').text()).toBe('on');
  });

});
