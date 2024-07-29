class LoginForm {
  static singleTon: LoginForm | null = null;
  private state: string = 'hide';
  private constructor() {}

  show() {
    if (this.state === 'show') {
      console.log('已经显示');
      return;
    }
    console.log('显示。。。。。。');
    this.state = 'sow';
  }

  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏');
      return;
    }
    console.log('隐藏。。。。。。');
    this.state = 'hide';
  }

  static getLoginForm() {
    if (this.singleTon === null) {
      this.singleTon = new LoginForm();
    }
    return this.singleTon;
  }
}

const loginForm1 = LoginForm.getLoginForm();
const loginForm2 = LoginForm.getLoginForm();

console.log(loginForm1 === loginForm2);
