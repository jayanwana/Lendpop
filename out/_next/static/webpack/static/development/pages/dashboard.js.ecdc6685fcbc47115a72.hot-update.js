webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./components/loanApplicationForm.js":
/*!*******************************************!*\
  !*** ./components/loanApplicationForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spring/renderprops.cjs */ "./node_modules/react-spring/renderprops.cjs.js");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/styles/withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_StepIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/StepIcon */ "./node_modules/@material-ui/core/esm/StepIcon/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/icons/NotificationsActive */ "./node_modules/@material-ui/icons/NotificationsActive.js");
/* harmony import */ var _material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/icons/AccountBox */ "./node_modules/@material-ui/icons/AccountBox.js");
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_icons_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/icons/SupervisedUserCircle */ "./node_modules/@material-ui/icons/SupervisedUserCircle.js");
/* harmony import */ var _material_ui_icons_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _common_Back__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./common/Back */ "./components/common/Back.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _components_questions__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../components/questions */ "./components/questions.js");
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./data/saudi_regions_lite.json */ "./components/data/saudi_regions_lite.json");
var _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/saudi_regions_lite.json */ "./components/data/saudi_regions_lite.json", 1);
/* harmony import */ var _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @material-ui/core/colors/indigo */ "./node_modules/@material-ui/core/colors/indigo.js");
/* harmony import */ var _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_46__);








var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\Lendpop\\components\\loanApplicationForm.js",
    _this3 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









































var AnimatedGrid = Object(react_spring__WEBPACK_IMPORTED_MODULE_11__["animated"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"]);
_c = AnimatedGrid;

var localStorage = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");

var backgroundShape = __webpack_require__(/*! ../public/images/shape.svg */ "./public/images/shape.svg");

numeral__WEBPACK_IMPORTED_MODULE_42___default.a.defaultFormat("0,000");

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary["A100"],
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "0 400px",
      marginTop: 10,
      padding: '20 0',
      width: "100%"
    },
    grid: {
      margin: 0
    },
    smallContainer: {
      width: "100%"
    },
    bigContainer: {
      width: "100%"
    },
    stepContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stepGrid: {
      width: "80%"
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    outlinedButtom: {
      textTransform: "uppercase",
      margin: theme.spacing(1)
    },
    stepper: {
      backgroundColor: "transparent",
      "@media screen and (max-width: 600px)": {
        display: "none"
      }
    },
    title: {
      fontSize: "1rem",
      flexGrow: 0,
      textAlign: 'left',
      color: theme.palette.primary.main
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: '10px',
      width: '100%'
    },
    successPaper: {
      backgroundColor: theme.palette.primary.main,
      justifyContent: 'space-around'
    },
    successText: {
      margin: '5px 0',
      color: 'white'
    },
    formPaper: {
      margin: 0
    },
    formLabel: {
      padding: 8,
      fontSize: '1.2rem',
      color: theme.palette.primary.main
    },
    formSubLabel: {
      padding: 8,
      fontSize: '1rem'
    },
    formCaption: {
      padding: 8,
      fontSize: '1rem'
    },
    fixedHeight: {
      height: 250
    },
    topInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 42
    },
    formControl: {
      width: "100%",
      '& .MuiTextField-root': {
        width: "100%"
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    borderColumn: {
      borderBottom: "1px solid ".concat(theme.palette.grey["100"]),
      paddingBottom: 24,
      marginBottom: 24
    },
    buttonProgress: {
      color: theme.palette.primary.main // position: 'absolute',
      // top: '50%',
      // left: '50%',
      // marginTop: -12,
      // marginLeft: -12,

    },
    flexBar: {
      marginTop: 32,
      display: "flex",
      justifyContent: "center",
      alignSelf: "flex-end",
      width: '40%',
      "@media screen and (max-width: 600px)": {
        marginRight: '15px'
      }
    }
  };
};

var CustomStepIcon = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__["default"])({
  text: {
    display: 'none'
  }
})(_material_ui_core_StepIcon__WEBPACK_IMPORTED_MODULE_28__["default"]);

var getSteps = function getSteps() {
  return ["INSTRUCTIONS", "PERSONAL INFO", "DEMOGRAPHICS", "ELIGIBILITY", "AGREEMENT", "OTHER INFO", "COMPLETE"];
};

var banks = ['The National Commercial Bank', 'The Saudi British Bank', 'Saudi Investment Bank', 'alinma bank', 'Banque Saudi Fransi', 'Riyad Bank', 'Samba Financial Group (Samba)', 'alawwal bank', 'Al Rajhi Bank', 'Arab National Bank', 'Bank AlBilad', 'Bank AlJazira', 'Gulf International Bank Saudi Aribia (GIB-SA)'];

var LoanApplicationForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LoanApplicationForm, _Component);

  var _super = _createSuper(LoanApplicationForm);

  function LoanApplicationForm() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanApplicationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      loading: false,
      activeStep: 0,
      termsChecked: false,
      conditionsChecked: false,
      labelWidth: 0,
      description: '',
      firstName: _this.props.firstName,
      lastName: _this.props.data.last_name,
      NationalIdNo: _this.props.data.national_id ? _this.props.data.national_id : '',
      dob: _this.props.data.dob ? _this.props.data.dob : '',
      email: _this.props.email,
      mobile: _this.props.data.mobile ? _this.props.data.mobile : '',
      address: _this.props.data.address ? _this.props.data.address : '',
      region: '',
      gender: _this.props.data.gender ? _this.props.data.gender : '',
      education: '',
      ethnicity: '',
      employeeReference: _this.props.data.employee_reference ? _this.props.data.employee_reference : '',
      employeeNumber: _this.props.data.employee_number ? _this.props.data.employee_number : '',
      salary: _this.props.data.salary ? _this.props.data.salary : '',
      questions: '',
      mobileCheck: false,
      addressCheck: false,
      gracePeriod: '',
      hascreditScore: false,
      creditScore: '',
      repaymentPlan: '',
      bankName: _this.props.data.bank ? _this.props.data.bank : '',
      accountNumber: _this.props.data.account_number ? _this.props.data.account_number : '',
      banks: banks,
      cardNumber: '',
      cvv: '',
      expDate: new Date(),
      files: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleNext", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep + 1
        };
      });

      var data = _objectSpread({}, _this.state);

      delete data.banks;
      delete data.files;
      delete data.loading;
      delete data.cardNumber;
      delete data.cvv;
      delete data.expDate;

      if (data.activeStep < 4) {
        localStorage('formstate', JSON.stringify(data));
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTerms", function (event) {
      var _this$setState2;

      _this.setState((_this$setState2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$setState2, event.target.name, event.target.checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$setState2, "loading", false), _this$setState2));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "goToDashboard", function (event) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.reload();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getCity", function (id) {
      return cities.filter(function (city) {
        return city.region_id === id;
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit", function (event) {
      event.preventDefault();

      if (_this.state.activeStep !== 4 && _this.state.activeStep !== 6) {
        return _this.handleNext();
      }

      if (_this.state.activeStep === 6) {
        return _this.goToDashboard();
      }

      if (_this.state.activeStep === 4) {
        _this.setState({
          loading: true
        });

        var date = _this.state.expDate.toLocaleDateString().split('/');

        var kycForm = {
          first_name: _this.state.firstName,
          last_name: _this.state.lastName,
          email: _this.state.email,
          national_id: _this.state.NationalIdNo,
          salary: _this.state.salary,
          employee_reference: _this.state.employeeReference,
          employee_number: _this.state.employeeNumber,
          gender: _this.state.gender,
          bank: _this.state.bankName ? _this.state.bankName : 'Dummy Data',
          mobile: _this.state.mobile,
          dob: _this.state.dob,
          tenure: _this.props.data.tenure,
          initial_amount: _this.props.data.initial_amount,
          address: _this.state.address,
          account_number: _this.state.accountNumber ? _this.state.accountNumber : '1234567890',
          pan: _this.state.cardNumber,
          cvv: _this.state.cvv,
          exp_date: "".concat(date[2].slice(2)).concat(numeral__WEBPACK_IMPORTED_MODULE_42___default()(date[0]).format('00'))
        };
        _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__["default"].kycUpdate(JSON.stringify(kycForm)).then(function (response) {
          return response.data.data;
        }).then(function (data) {
          var apiData = {
            "email": data.email,
            "amount": data.initial_amount,
            "loan_cos": "1",
            "tenure": data.tenure
          };
          return apiData;
        }).then(function (data) {
          return _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__["default"].loanApplication(JSON.stringify(data));
        }).then(function (response) {
          _this.setState({
            description: response.data.description
          });

          if (_this.state.files.length) {
            var formData = new FormData();
            var keys = ["national_id", 'statement', 'contract', 'payslip'];

            for (var i = 0; i < _this.state.files.length; i++) {
              formData.append(keys[i], _this.state.files[i], _this.state.files[i].name);
            }

            formData.append('loan_id', response.data.data.id);
            console.log('uploading files...');
            _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__["default"].docUpload(formData).then(function (response) {
              return response;
            })["catch"](function (error) {
              console.log(error.response);
            });
          } else {
            return response;
          }
        }).then(function (response) {
          _this.setState({
            loading: false
          });

          _this.clear();

          _this.handleNext();
        })["catch"](function (error) {
          console.log(error.response);
          return _this.setState({
            loading: false
          });
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanApplicationForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var formData = JSON.parse(localStorage('formstate'));

      if (formData) {
        this.setState(_objectSpread({}, formData));
      }

      ;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "stepActions",
    value: function stepActions() {
      if (this.state.activeStep === 4) {
        return "Accept";
      }

      if (this.state.activeStep === 3) {
        return "Submit";
      }

      if (this.state.activeStep === 6) {
        return "Done";
      }

      return "Next";
    }
  }, {
    key: "handleSave",
    value: function handleSave(files) {
      this.setState({
        files: files
      });
    }
  }, {
    key: "handleDateChange",
    value: function handleDateChange(expDate) {
      this.setState({
        expDate: expDate
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var edulist = ['None', 'Primary', 'Secondary', 'Diploma', 'Bachelors', 'Masters', 'Doctorate'];
      var handleChange = this.handleChange;
      var handleTerms = this.handleTerms;
      var goToDashboard = this.goToDashboard.bind(this);
      var classes = this.props.classes;
      var steps = getSteps();
      var _this$state = this.state,
          activeStep = _this$state.activeStep,
          firstName = _this$state.firstName,
          loading = _this$state.loading,
          termsChecked = _this$state.termsChecked,
          conditionsChecked = _this$state.conditionsChecked;
      var fixedHeightPaper = Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.paper, classes.fixedHeight);
      var successPaper = Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.paper, classes.successPaper);

      var Label = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "caption",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 19
        }
      }, "PLEASE CLICK TO AGREE TO THE TERMS AND CONDITIONS");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        container: true,
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        alignItems: "center",
        justify: "center",
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: classes.stepContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: classes.bigContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 19
        }
      }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18__["default"], {
        classes: {
          root: classes.stepper
        },
        activeStep: activeStep,
        alternativeLabel: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 21
        }
      }, steps.map(function (label) {
        return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 27
          }
        }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
          StepIconComponent: CustomStepIcon,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 29
          }
        }, label));
      }))), __jsx("form", {
        className: classes.formControl,
        onSubmit: this.submit,
        validate: "true",
        autoComplete: "off",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 19
        }
      }, activeStep === 0 && __jsx(Form0, {
        fixedHeightPaper: fixedHeightPaper,
        classes: classes,
        firstName: firstName,
        Label: Label,
        termsChecked: termsChecked,
        handleChange: handleChange,
        handleTerms: handleTerms,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 23
        }
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 1,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 1 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 437,
              columnNumber: 25
            }
          }, __jsx(Form1, {
            classes: classes,
            handleTerms: handleTerms,
            handleChange: handleChange,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 2,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 2 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 25
            }
          }, __jsx(Form2, {
            classes: classes,
            handleTerms: handleTerms,
            handleChange: handleChange,
            edulist: edulist,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 3,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 3 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 25
            }
          }, __jsx(Form3, {
            classes: classes,
            banks: banks,
            handleSave: _this2.handleSave.bind(_this2),
            handleChange: handleChange,
            handleDateChange: _this2.handleDateChange.bind(_this2),
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 4,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 4 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 491,
              columnNumber: 25
            }
          }, __jsx(Form4, {
            classes: classes,
            handleTerms: handleTerms,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 492,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 5,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 5 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 25
            }
          }, __jsx(Form5, {
            classes: classes,
            handleChange: handleChange,
            successPaper: successPaper,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 508,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 6,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 6 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 524,
              columnNumber: 25
            }
          }, __jsx(Form6, {
            classes: classes,
            dash: goToDashboard,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 525,
              columnNumber: 27
            }
          }));
        };
      }), __jsx("div", {
        className: classes.flexBar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 21
        }
      }, activeStep < 5 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
        fullWidth: true,
        variant: "outlined",
        disabled: activeStep === 0,
        onClick: this.handleBack,
        className: classes.backButton,
        size: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 25
        }
      }, "Back"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
        fullWidth: true,
        variant: "contained",
        color: "primary",
        type: "submit",
        size: "large",
        disabled: this.state.activeStep === 0 && !termsChecked || this.state.activeStep === 4 && !conditionsChecked || loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 23
        }
      }, loading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_30__["default"], {
        size: 24,
        className: classes.buttonProgress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 36
        }
      }) : this.stepActions())))))))));
    }
  }]);

  return LoanApplicationForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Form0 = function Form0(_ref) {
  var fixedHeightPaper = _ref.fixedHeightPaper,
      classes = _ref.classes,
      firstName = _ref.firstName,
      termsChecked = _ref.termsChecked,
      handleChange = _ref.handleChange,
      handleTerms = _ref.handleTerms,
      Label = _ref.Label;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 11
    }
  }, "Loan Application Instructions"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 11
    }
  }, "Welcome to the InstaKash application portal ", firstName, ","), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 11
    }
  }, "we will walk you through the easy process as you continue your application."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 11
    }
  }, "Please have the following documents avalable:"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 13
    }
  }, "Basic information about yourself"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 13
    }
  }, "For personal loans, specify employer, employer refrence number, your current salary "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 13
    }
  }, "A picture of you for your loan profile")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 11
    }
  }, "Your application is automatically saved as you go through the process"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 11
    }
  }, "For inquiries please send an email to borrow@InstaKash.com"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 11
    }
  }, "Application requirements"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 11
    }
  }, "The following are specific requirements for applying for POP lending"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 13
    }
  }, "Read instructions"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 13
    }
  }, "Provide all other personal information"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 13
    }
  }, "Employment history "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 13
    }
  }, "BVN "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 13
    }
  }, "Bank details"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 13
    }
  }, "Documents for account statements")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 11
    }
  }, "Click next to proceed to the next stage of your InstaKash application")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "termsChecked",
      checked: termsChecked,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 15
      }
    }),
    label: Label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 11
    }
  }))));
};

_c2 = Form0;

var Form1 = function Form1(_ref2) {
  var classes = _ref2.classes,
      handleChange = _ref2.handleChange,
      handleTerms = _ref2.handleTerms,
      _ref2$state = _ref2.state,
      firstName = _ref2$state.firstName,
      lastName = _ref2$state.lastName,
      dob = _ref2$state.dob,
      mobile = _ref2$state.mobile,
      mobileCheck = _ref2$state.mobileCheck,
      employeeReference = _ref2$state.employeeReference,
      employeeNumber = _ref2$state.employeeNumber,
      salary = _ref2$state.salary,
      address = _ref2$state.address,
      email = _ref2$state.email,
      region = _ref2$state.region,
      addressCheck = _ref2$state.addressCheck,
      NationalIdNo = _ref2$state.NationalIdNo;
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 7
    }
  }, "PERSONAL INFORMATION"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "firstName",
    id: "outlined-required-firstName",
    label: "First Name",
    variant: "outlined",
    value: firstName,
    onChange: handleChange,
    placeholder: "Enter Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-lastName",
    label: "Last Name",
    variant: "outlined",
    name: "lastName",
    value: lastName,
    onChange: handleChange,
    placeholder: "Enter Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-nin-input",
    label: "National ID Number",
    autoComplete: "national-id-number",
    variant: "outlined",
    name: "NationalIdNo",
    value: NationalIdNo,
    onChange: handleChange,
    placeholder: "Enter National ID Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-dob-input",
    label: "Date of Birth",
    variant: "outlined",
    type: "date",
    format: "dd/mm/yyyy",
    name: "dob",
    value: dob,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "email",
    value: email,
    onChange: handleChange,
    placeholder: "Enter Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "mobile",
    value: mobile,
    onChange: handleChange,
    placeholder: "Enter Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 0
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      marginTop: '-10px',
      marginLeft: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "mobileCheck",
      checked: mobileCheck,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 19
      }
    }),
    label: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "body2",
      style: {
        fontSize: '0.5rem'
      },
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760,
        columnNumber: 24
      }
    }, "By clicking the button you opt in for sms notification of offerings sms charges apply"),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "employeeReference",
    id: "outlined-employee-reference",
    label: "Employer Address",
    variant: "outlined",
    value: employeeReference,
    onChange: handleChange,
    placeholder: "Enter your Employers Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "employeeNumber",
    id: "outlined-employee-number",
    label: "Employee Number",
    variant: "outlined",
    value: employeeNumber,
    onChange: handleChange,
    placeholder: "Enter Employee Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "salary",
    id: "outlined-salary",
    label: "Salary",
    variant: "outlined",
    type: "number",
    value: salary,
    onChange: handleChange,
    placeholder: "Enter Monthly Salary Amount",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-address",
    label: "Physical Address Information",
    variant: "outlined",
    name: "address",
    value: address,
    onChange: handleChange,
    placeholder: "Enter your home address, please specify street name or use location finder",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-region",
    select: true,
    label: "Current Region",
    name: "region",
    value: region,
    onChange: handleChange,
    variant: "outlined",
    placeholder: "Select Region",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 11
    }
  }, _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45__.map(function (region) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: region.region_id,
      value: region.region_id,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 849,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      },
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 19
      }
    }, region.name_en), __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 46
      }
    }, region.name_ar)));
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    style: {
      padding: 0
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    style: {
      "float": "left"
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      marginTop: '-15px',
      marginLeft: 0,
      marginRight: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "addressCheck",
      checked: addressCheck,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 864,
        columnNumber: 19
      }
    }),
    label: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "body2",
      style: {
        fontSize: '0.5rem'
      },
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 871,
        columnNumber: 24
      }
    }, "Please indicate if your address has changed in the past 3 years."),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 15
    }
  }))))));
};

_c3 = Form1;

var Form2 = function Form2(_ref3) {
  var classes = _ref3.classes,
      handleChange = _ref3.handleChange,
      edulist = _ref3.edulist,
      _ref3$state = _ref3.state,
      gender = _ref3$state.gender,
      education = _ref3$state.education,
      ethnicity = _ref3$state.ethnicity;
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 7
    }
  }, "DEMOGRAPHICS"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    required: true,
    fullWidth: true,
    id: "outlined-select-gender",
    select: true,
    label: "Gender",
    name: "gender",
    value: gender,
    onChange: handleChange,
    variant: "outlined",
    placeholder: "Please pick your gender",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "male",
    value: "male",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 13
    }
  }, "Male"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "female",
    value: "female",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 13
    }
  }, "Female"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-education",
    select: true,
    label: "Education",
    placeholder: "Education",
    name: "education",
    value: education,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 11
    }
  }, edulist.map(function (level) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: level,
      value: level,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929,
        columnNumber: 15
      }
    }, level);
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "ethnicity",
    id: "outlined-ethnicity",
    label: "Ethnicity",
    variant: "outlined",
    value: ethnicity,
    onChange: handleChange,
    placeholder: "Enter Ethnicity",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
      columnNumber: 11
    }
  }))));
};

_c4 = Form2;

var Form3 = function Form3(_ref4) {
  var classes = _ref4.classes,
      handleChange = _ref4.handleChange,
      banks = _ref4.banks,
      handleSave = _ref4.handleSave,
      handleDateChange = _ref4.handleDateChange,
      _ref4$state = _ref4.state,
      gracePeriod = _ref4$state.gracePeriod,
      hascreditScore = _ref4$state.hascreditScore,
      creditScore = _ref4$state.creditScore,
      repaymentPlan = _ref4$state.repaymentPlan,
      bankName = _ref4$state.bankName,
      accountNumber = _ref4$state.accountNumber,
      cardNumber = _ref4$state.cardNumber,
      cvv = _ref4$state.cvv,
      expDate = _ref4$state.expDate;
  var date = new Date();
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960,
      columnNumber: 9
    }
  }, "ELIGIBILITY"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: '20px 0',
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-select-gracePeriod",
    select: true,
    label: "Eligibility for grace period",
    name: "gracePeriod",
    value: gracePeriod,
    onChange: handleChange,
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 13
    }
  }, ['1 Week', '2 Weeks', '3 Weeks', '1 Month'].map(function (item) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: item,
      value: item,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 977,
        columnNumber: 17
      }
    }, item);
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-education",
    select: true,
    label: "Do you have a credit score?",
    name: "hascreditScore",
    value: hascreditScore,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 15
    }
  }, "Yes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: false,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 15
    }
  }, "No"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    disabled: !hascreditScore ? true : false,
    name: "creditScore",
    id: "outlined-creditScore",
    label: "If yes, please provide your credit score",
    variant: "outlined",
    value: creditScore,
    onChange: handleChange,
    placeholder: "Enter Credit Score",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 9
    }
  }, "DEBIT & RECONCILIATION AUTHORIZATION"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: '20px 0',
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-repayment-plan",
    select: true,
    label: "How would you like to repay your loan?",
    name: "repaymentPlan",
    value: repaymentPlan,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: "Bank",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 15
    }
  }, "Bank"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: "Card",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 15
    }
  }, "Card"))), repaymentPlan === 'Card' ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    type: "number",
    name: "cardNumber",
    id: "outlined-cardNumber",
    label: "Card Number",
    variant: "outlined",
    value: cardNumber,
    onChange: handleChange,
    placeholder: "Enter Card Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1051,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "cvv",
    id: "outlined-cvv",
    label: "CVV",
    variant: "outlined",
    value: cvv,
    onChange: handleChange,
    placeholder: "Enter CVV",
    InputLabelProps: {
      shrink: true
    },
    InputProps: {
      inputProps: {
        maxLength: 3,
        minLength: 3
      }
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 15
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_40__["DatePicker"], {
    autoOk: true,
    variant: "inline",
    inputVariant: "outlined",
    views: ["year", "month"],
    label: "Expiry Date",
    name: "expDate",
    minDate: date,
    maxDate: new Date(date.getFullYear() + 3, date.getMonth()),
    value: expDate,
    onChange: handleDateChange,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 17
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-select-bank-name",
    select: true,
    label: "Bank Name",
    placeholder: "Enter Bank Name",
    name: "bankName",
    value: bankName,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 15
    }
  }, banks.map(function (bank, index) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: index,
      value: bank,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1123,
        columnNumber: 19
      }
    }, bank);
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    type: "number",
    name: "accountNumber",
    id: "outlined-accountNumber",
    label: "Account Number",
    variant: "outlined",
    value: accountNumber,
    onChange: handleChange,
    placeholder: "Enter Account Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 9
    }
  }, "LIST OF DOCUMENTS TO UPLOAD"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: '20px 0',
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      backgroundColor: '#ececec',
      padding: '8px'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1155,
      columnNumber: 17
    }
  }, "A passport photograph"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 17
    }
  }, "Bank statement"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 17
    }
  }, "Letter of employment")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 11
    }
  }, __jsx(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_32__["DropzoneArea"], {
    onChange: handleSave,
    filesLimit: 4,
    acceptedFiles: ['image/jpeg', 'image/png', 'application/pdf'],
    showPreviews: true,
    maxFileSize: 5000000,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 13
    }
  }))));
};

_c5 = Form3;

var Form4 = function Form4(_ref5) {
  var classes = _ref5.classes,
      handleTerms = _ref5.handleTerms,
      conditionsChecked = _ref5.state.conditionsChecked;
  return __jsx("div", {
    className: classes.bigContainer,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginBottom: 24
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1180,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "caption",
    className: classes.formLabel,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181,
      columnNumber: 11
    }
  }, "TERMS & CONDITIONS"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 11
    }
  }, "Please read through and accept the terms & conditions")), __jsx("div", {
    style: {
      height: 330,
      padding: 16,
      border: "2px solid #ccc",
      borderRadius: "3px",
      overflowY: "scroll"
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "subtitle1",
    style: {
      fontWeight: "bold"
    },
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1201,
      columnNumber: 11
    }
  }, "1. Your agreement"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208,
      columnNumber: 11
    }
  }, "By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "subtitle1",
    style: {
      fontWeight: "bold"
    },
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226,
      columnNumber: 11
    }
  }, "2. Privacy"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1233,
      columnNumber: 11
    }
  }, "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices. By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "conditionsChecked",
      checked: conditionsChecked,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1257,
        columnNumber: 15
      }
    }),
    label: "I have read and understood the terms & conditions",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1255,
      columnNumber: 11
    }
  }))));
};

_c6 = Form4;

var Form5 = function Form5(_ref6) {
  var classes = _ref6.classes,
      handleChange = _ref6.handleChange,
      successPaper = _ref6.successPaper,
      description = _ref6.state.description;
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1274,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: successPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1275,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.successText,
    variant: "body1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1276,
      columnNumber: 9
    }
  }, description), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.successText,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1279,
      columnNumber: 9
    }
  }, "You're one step closer to completing your loan application, ", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280,
      columnNumber: 71
    }
  }), "Instakash would like to get your personal social media details and 5 of your close contacts information.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284,
      columnNumber: 7
    }
  }, "SOCIAL MEDIA HANDLE"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1285,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1286,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "input-with-icon-textfield",
    label: "Facebook",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1295,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1296,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1287,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1302,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "social-twitter",
    label: "Twitter",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1311,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1312,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1303,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1318,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "social-instagram",
    label: "Instagram",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1327,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1328,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1319,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1334,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "social-snapchat",
    label: "Snap Chat",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1343,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1344,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1335,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1351,
      columnNumber: 7
    }
  }, "REFEREE CONTACT INFO"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1352,
      columnNumber: 7
    }
  }, "  Referee 1"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1354,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1355,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee1firstName",
    id: "outlined-required-referee1firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1356,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1370,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee1lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee1lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1371,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1384,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee1email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee1email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1385,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1399,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee1mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee1mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1400,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1415,
      columnNumber: 7
    }
  }, "  Referee 2"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1417,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1418,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee2firstName",
    id: "outlined-required-referee2firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1419,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1433,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee2lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee2lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1434,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1447,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee2email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee2email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1448,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1462,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee2mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee2mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1463,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1478,
      columnNumber: 7
    }
  }, "  Referee 3"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1480,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1481,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee3firstName",
    id: "outlined-required-referee3firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1482,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1496,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee3lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee3lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1497,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1510,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee3email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee3email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1511,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1525,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee3mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee3mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1526,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1541,
      columnNumber: 7
    }
  }, "  Referee 4"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1543,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1544,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee4firstName",
    id: "outlined-required-referee4firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1545,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1559,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee4lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee4lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1560,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1573,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee4email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee4email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1574,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1588,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee4mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee4mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1589,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1604,
      columnNumber: 7
    }
  }, "  Referee 5"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1606,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1607,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee5firstName",
    id: "outlined-required-referee5firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1608,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1622,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee5lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee5lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1623,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1636,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee5email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee5email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1637,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1651,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee5mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee5mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1652,
      columnNumber: 11
    }
  }))));
};

_c7 = Form5;

var Form6 = function Form6(_ref7) {
  var classes = _ref7.classes,
      dash = _ref7.dash,
      firstName = _ref7.state.firstName;
  return __jsx("div", {
    className: classes.smallContainer,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1673,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1674,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    container: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1675,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1676,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1677,
      columnNumber: 13
    }
  }, "Congratulations", " ", __jsx("span", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1679,
      columnNumber: 15
    }
  }, firstName, "!!!")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1684,
      columnNumber: 13
    }
  }, "An email has been sent to you with your loan application ID. If you wish to make enquiries about your loan, please send an email to borrow@InstaKash.com."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1689,
      columnNumber: 13
    }
  }, "Your dashboard is ready for you to review your loan history"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true,
    variant: "outlined",
    onClick: dash,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1692,
      columnNumber: 13
    }
  }, "Back to Dashboard")))));
};

_c8 = Form6;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__["default"])(styles)(LoanApplicationForm));
{
  /* <Grid item xs={12} sm={2}>
   <TextField
   disabled={!region ? true : false}
   id="outlined-select-city"
   select
   label="Current City"
   name="city"
   value={city}
   onChange={handleChange}
   InputLabelProps={{
   shrink: true,
   }}
   variant="outlined"
   >
   {region ? (this.getCity(region).map((city) => (
   <MenuItem key={city.city_id} value={city.city_id}>
   <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
   <div>{city.name_en}</div><div>{city.name_ar}</div>
   </div>
   </MenuItem>
   ))) : (this.getCity(1).map((city) => (
   <MenuItem key={city.city_id} value={city.name_en}>
   <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
   <div>{city.name_en}</div><div>{city.name_ar}</div>
   </div>
   </MenuItem>
   )))}
   </TextField>
  </Grid> */
}

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "AnimatedGrid");
$RefreshReg$(_c2, "Form0");
$RefreshReg$(_c3, "Form1");
$RefreshReg$(_c4, "Form2");
$RefreshReg$(_c5, "Form3");
$RefreshReg$(_c6, "Form4");
$RefreshReg$(_c7, "Form5");
$RefreshReg$(_c8, "Form6");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJEYXRlIiwiZmlsZXMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIlJvdXRlciIsInJlbG9hZCIsImlkIiwiY2l0aWVzIiwiZmlsdGVyIiwiY2l0eSIsInJlZ2lvbl9pZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmV4dCIsImdvVG9EYXNoYm9hcmQiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3BsaXQiLCJreWNGb3JtIiwiZmlyc3RfbmFtZSIsInRlbnVyZSIsImluaXRpYWxfYW1vdW50IiwicGFuIiwiZXhwX2RhdGUiLCJzbGljZSIsImZvcm1hdCIsIkFwaSIsImt5Y1VwZGF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImFwaURhdGEiLCJsb2FuQXBwbGljYXRpb24iLCJsZW5ndGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwia2V5cyIsImkiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZG9jVXBsb2FkIiwiZXJyb3IiLCJjbGVhciIsInBhcnNlIiwiZWR1bGlzdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVRlcm1zIiwiYmluZCIsImNsYXNzZXMiLCJzdGVwcyIsImZpeGVkSGVpZ2h0UGFwZXIiLCJjbHN4IiwiTGFiZWwiLCJtYXAiLCJsYWJlbCIsInN1Ym1pdCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJpdGVtcyIsImhhbmRsZVNhdmUiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiaGFuZGxlQmFjayIsInN0ZXBBY3Rpb25zIiwiQ29tcG9uZW50IiwiRm9ybTAiLCJGb3JtMSIsInNocmluayIsIm1hcmdpbkxlZnQiLCJyZWdpb25zIiwibmFtZV9lbiIsIm5hbWVfYXIiLCJGb3JtMiIsImxldmVsIiwiRm9ybTMiLCJpdGVtIiwiaW5wdXRQcm9wcyIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJpbmRleCIsIkZvcm00IiwiYm9yZGVyIiwib3ZlcmZsb3dZIiwiZm9udFdlaWdodCIsIkZvcm01Iiwic3RhcnRBZG9ybm1lbnQiLCJGb3JtNiIsImRhc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dtQyxTQURILFFBRkYsQ0FERixFQVFFLE1BQUMscUVBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpS0FSRixFQWFFLE1BQUMscUVBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsZ0JBQVksTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFiRixFQWdCRSxNQUFDLGlFQUFEO0FBQVEsYUFBUyxNQUFqQjtBQUFrQixXQUFPLEVBQUMsVUFBMUI7QUFBcUMsV0FBTyxFQUFFZ0ksSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkYsQ0FERixDQURGLENBREYsQ0FERjtBQTRCRCxDQTdCRDs7TUFBTUQsSztBQStCUzNJLDhJQUFVLENBQUN4RCxNQUFELENBQVYsQ0FBbUI2RCxtQkFBbkIsQ0FBZjtBQUVBO0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmQuanMuZWNkYzY2ODVmY2JjNDcxMTVhNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gJ3JlYWN0LXNwcmluZy9yZW5kZXJwcm9wcy5janMnO1xuaW1wb3J0IHthbmltYXRlZCwgY29uZmlnfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBTdGVwcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwcGVyXCI7XG5pbXBvcnQgU3RlcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcFwiO1xuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcExhYmVsXCI7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XG5pbXBvcnQgU3RlcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcEljb24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7RHJvcHpvbmVBcmVhfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJztcbmltcG9ydCBOb3RpZmljYXRpb25zQWN0aXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc0FjdGl2ZSc7XG5pbXBvcnQgQWNjb3VudEJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3gnO1xuaW1wb3J0IFN1cGVydmlzZWRVc2VyQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3VwZXJ2aXNlZFVzZXJDaXJjbGUnO1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcbmltcG9ydCBCYWNrIGZyb20gXCIuL2NvbW1vbi9CYWNrXCI7XG5pbXBvcnQgbnVtZXJhbCBmcm9tIFwibnVtZXJhbFwiO1xuaW1wb3J0IFF1ZXN0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3F1ZXN0aW9ucyc7XG5pbXBvcnQgQXBpIGZyb20gJy4uL3V0aWxzL2F4aW9zLnNlcnZpY2UnO1xuaW1wb3J0IHJlZ2lvbnMgZnJvbSAnLi9kYXRhL3NhdWRpX3JlZ2lvbnNfbGl0ZS5qc29uJztcbmltcG9ydCBpbmRpZ28gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2luZGlnbyc7XG5cbmNvbnN0IEFuaW1hdGVkR3JpZCA9IGFuaW1hdGVkKEdyaWQpXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKCdsb2NhbC1zdG9yYWdlJylcbmNvbnN0IGJhY2tncm91bmRTaGFwZSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvaW1hZ2VzL3NoYXBlLnN2Z1wiKTtcblxubnVtZXJhbC5kZWZhdWx0Rm9ybWF0KFwiMCwwMDBcIik7XG5cblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5W1wiQTEwMFwiXSxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCIwIDQwMHB4XCIsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBwYWRkaW5nOiAnMjAgMCcsXG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG5cbiAgZ3JpZDoge1xuICAgIG1hcmdpbjogMFxuICB9LFxuICBzbWFsbENvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBiaWdDb250YWluZXI6IHtcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcbiAgc3RlcENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9LFxuICBzdGVwR3JpZDoge1xuICAgIHdpZHRoOiBcIjgwJVwiXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICB9LFxuICBvdXRsaW5lZEJ1dHRvbToge1xuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIHN0ZXBwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiOntcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgIGZsZXhHcm93OiAwLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICB9LFxuXG4gIHBhcGVyOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHN1Y2Nlc3NQYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gIH0sXG4gIHN1Y2Nlc3NUZXh0OiB7XG4gICAgbWFyZ2luOiAnNXB4IDAnLFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH0sXG4gIGZvcm1QYXBlcjoge1xuICAgIG1hcmdpbjogMCxcbiAgfSxcbiAgZm9ybUxhYmVsOiB7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzEuMnJlbScsXG4gICAgY29sb3I6dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgfSxcbiAgZm9ybVN1YkxhYmVsOiB7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICB9LFxuICBmb3JtQ2FwdGlvbjp7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICB9LFxuICBmaXhlZEhlaWdodDoge1xuICAgIGhlaWdodDogMjUwLFxuICB9LFxuICB0b3BJbmZvOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiA0MlxuICB9LFxuICBmb3JtQ29udHJvbDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICB9LFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBib3JkZXJDb2x1bW46IHtcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmdyZXlbXCIxMDBcIl19YCxcbiAgICBwYWRkaW5nQm90dG9tOiAyNCxcbiAgICBtYXJnaW5Cb3R0b206IDI0XG4gIH0sXG4gIGJ1dHRvblByb2dyZXNzOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIC8vIHRvcDogJzUwJScsXG4gICAgLy8gbGVmdDogJzUwJScsXG4gICAgLy8gbWFyZ2luVG9wOiAtMTIsXG4gICAgLy8gbWFyZ2luTGVmdDogLTEyLFxuICB9LFxuICBmbGV4QmFyOiB7XG4gICAgbWFyZ2luVG9wOiAzMixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnblNlbGY6IFwiZmxleC1lbmRcIixcbiAgICB3aWR0aDogJzQwJScsXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIjp7XG4gICAgICBtYXJnaW5SaWdodDogJzE1cHgnXG4gICAgfVxuICB9XG59KTtcblxuY29uc3QgQ3VzdG9tU3RlcEljb24gPSB3aXRoU3R5bGVzKHtcbiAgdGV4dDoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfVxufSkoU3RlcEljb24pXG5cblxuY29uc3QgZ2V0U3RlcHMgPSAoKSA9PiB7XG4gIHJldHVybiBbXCJJTlNUUlVDVElPTlNcIiwgXCJQRVJTT05BTCBJTkZPXCIsIFwiREVNT0dSQVBISUNTXCIsIFwiRUxJR0lCSUxJVFlcIiwgXCJBR1JFRU1FTlRcIiwgXCJPVEhFUiBJTkZPXCIsIFwiQ09NUExFVEVcIl07XG59O1xuXG5jb25zdCBiYW5rcyA9IFsnVGhlIE5hdGlvbmFsIENvbW1lcmNpYWwgQmFuaycsICdUaGUgU2F1ZGkgQnJpdGlzaCBCYW5rJywgJ1NhdWRpIEludmVzdG1lbnQgQmFuaycsJ2FsaW5tYSBiYW5rJywnQmFucXVlIFNhdWRpIEZyYW5zaScsJ1JpeWFkIEJhbmsnLCAnU2FtYmEgRmluYW5jaWFsIEdyb3VwIChTYW1iYSknLCAnYWxhd3dhbCBiYW5rJywgJ0FsIFJhamhpIEJhbmsnLCAnQXJhYiBOYXRpb25hbCBCYW5rJywgJ0JhbmsgQWxCaWxhZCcsICdCYW5rIEFsSmF6aXJhJywgJ0d1bGYgSW50ZXJuYXRpb25hbCBCYW5rIFNhdWRpIEFyaWJpYSAoR0lCLVNBKSddXG5cbmNsYXNzIExvYW5BcHBsaWNhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBhY3RpdmVTdGVwOiAwLFxuICAgIHRlcm1zQ2hlY2tlZDogZmFsc2UsXG4gICAgY29uZGl0aW9uc0NoZWNrZWQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGZpcnN0TmFtZTogdGhpcy5wcm9wcy5maXJzdE5hbWUsXG4gICAgbGFzdE5hbWU6IHRoaXMucHJvcHMuZGF0YS5sYXN0X25hbWUsXG4gICAgTmF0aW9uYWxJZE5vOiB0aGlzLnByb3BzLmRhdGEubmF0aW9uYWxfaWQgPyB0aGlzLnByb3BzLmRhdGEubmF0aW9uYWxfaWQgOiAnJyxcbiAgICBkb2I6IHRoaXMucHJvcHMuZGF0YS5kb2IgPyB0aGlzLnByb3BzLmRhdGEuZG9iIDogJycsXG4gICAgZW1haWw6IHRoaXMucHJvcHMuZW1haWwsXG4gICAgbW9iaWxlOiB0aGlzLnByb3BzLmRhdGEubW9iaWxlID8gdGhpcy5wcm9wcy5kYXRhLm1vYmlsZSA6ICcnLFxuICAgIGFkZHJlc3M6IHRoaXMucHJvcHMuZGF0YS5hZGRyZXNzID8gdGhpcy5wcm9wcy5kYXRhLmFkZHJlc3MgOiAnJyxcbiAgICByZWdpb246ICcnLFxuICAgIGdlbmRlcjogdGhpcy5wcm9wcy5kYXRhLmdlbmRlciA/IHRoaXMucHJvcHMuZGF0YS5nZW5kZXIgOiAnJyxcbiAgICBlZHVjYXRpb246ICcnLFxuICAgIGV0aG5pY2l0eTonJyxcbiAgICBlbXBsb3llZVJlZmVyZW5jZTogdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX3JlZmVyZW5jZSA/IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9yZWZlcmVuY2UgOiAnJyxcbiAgICBlbXBsb3llZU51bWJlcjogdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX251bWJlciA/IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9udW1iZXIgOiAnJyxcbiAgICBzYWxhcnk6IHRoaXMucHJvcHMuZGF0YS5zYWxhcnkgPyB0aGlzLnByb3BzLmRhdGEuc2FsYXJ5IDogJycsXG4gICAgcXVlc3Rpb25zOicnLFxuICAgIG1vYmlsZUNoZWNrOiBmYWxzZSxcbiAgICBhZGRyZXNzQ2hlY2s6IGZhbHNlLFxuICAgIGdyYWNlUGVyaW9kOiAnJyxcbiAgICBoYXNjcmVkaXRTY29yZTogZmFsc2UsXG4gICAgY3JlZGl0U2NvcmU6ICcnLFxuICAgIHJlcGF5bWVudFBsYW46ICcnLFxuICAgIGJhbmtOYW1lOiB0aGlzLnByb3BzLmRhdGEuYmFuayA/IHRoaXMucHJvcHMuZGF0YS5iYW5rIDogJycsXG4gICAgYWNjb3VudE51bWJlcjogdGhpcy5wcm9wcy5kYXRhLmFjY291bnRfbnVtYmVyID8gdGhpcy5wcm9wcy5kYXRhLmFjY291bnRfbnVtYmVyIDogJycsXG4gICAgYmFua3M6IGJhbmtzLFxuICAgIGNhcmROdW1iZXI6ICcnLFxuICAgIGN2djogJycsXG4gICAgZXhwRGF0ZTogbmV3IERhdGUoKSxcbiAgICBmaWxlczogW11cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlKCdmb3Jtc3RhdGUnKSlcbiAgICBpZiAoZm9ybURhdGEpe3RoaXMuc2V0U3RhdGUoey4uLmZvcm1EYXRhfSl9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgfVxuXG4gIGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgYWN0aXZlU3RlcDogc3RhdGUuYWN0aXZlU3RlcCArIDFcbiAgICB9KSk7XG4gICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlfVxuICAgIGRlbGV0ZSBkYXRhLmJhbmtzXG4gICAgZGVsZXRlIGRhdGEuZmlsZXNcbiAgICBkZWxldGUgZGF0YS5sb2FkaW5nXG4gICAgZGVsZXRlIGRhdGEuY2FyZE51bWJlclxuICAgIGRlbGV0ZSBkYXRhLmN2dlxuICAgIGRlbGV0ZSBkYXRhLmV4cERhdGVcbiAgICBpZihkYXRhLmFjdGl2ZVN0ZXAgPCA0KSB7XG4gICAgbG9jYWxTdG9yYWdlKCdmb3Jtc3RhdGUnLCBKU09OLnN0cmluZ2lmeShkYXRhKSl9XG4gIH07XG5cbiAgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBhY3RpdmVTdGVwOiBzdGF0ZS5hY3RpdmVTdGVwIC0gMVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IDBcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUZXJtcyA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHN0ZXBBY3Rpb25zKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQpIHtcbiAgICAgIHJldHVybiBcIkFjY2VwdFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSAzKSB7XG4gICAgICByZXR1cm4gXCJTdWJtaXRcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNikge1xuICAgICAgcmV0dXJuIFwiRG9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJOZXh0XCI7XG4gIH1cblxuICBnb1RvRGFzaGJvYXJkID0gZXZlbnQgPT4ge1xuICAgIFJvdXRlci5yZWxvYWQoKVxuICB9O1xuXG4gIGdldENpdHkgPSBpZCA9PiB7XG4gICAgcmV0dXJuIGNpdGllcy5maWx0ZXIoY2l0eSA9PiB7XG4gICAgICByZXR1cm4gY2l0eS5yZWdpb25faWQgPT09IGlkXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmUoZmlsZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWxlczogZmlsZXMsfSk7XG4gIH1cblxuICBoYW5kbGVEYXRlQ2hhbmdlKGV4cERhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtleHBEYXRlfSlcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gIH1cblxuICBzdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgIT09IDQgJiYgdGhpcy5zdGF0ZS5hY3RpdmVTdGVwICE9PSA2KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVOZXh0KClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNikge1xuICAgICAgcmV0dXJuIHRoaXMuZ29Ub0Rhc2hib2FyZCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxuICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuc3RhdGUuZXhwRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBreWNGb3JtID0ge1xuICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLnN0YXRlLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnN0YXRlLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgbmF0aW9uYWxfaWQ6IHRoaXMuc3RhdGUuTmF0aW9uYWxJZE5vLFxuICAgICAgICBzYWxhcnk6IHRoaXMuc3RhdGUuc2FsYXJ5LFxuICAgICAgICBlbXBsb3llZV9yZWZlcmVuY2U6IHRoaXMuc3RhdGUuZW1wbG95ZWVSZWZlcmVuY2UsXG4gICAgICAgIGVtcGxveWVlX251bWJlcjogdGhpcy5zdGF0ZS5lbXBsb3llZU51bWJlcixcbiAgICAgICAgZ2VuZGVyOiB0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAgICAgYmFuazogdGhpcy5zdGF0ZS5iYW5rTmFtZSA/IHRoaXMuc3RhdGUuYmFua05hbWUgOiAnRHVtbXkgRGF0YScsXG4gICAgICAgIG1vYmlsZTogdGhpcy5zdGF0ZS5tb2JpbGUsXG4gICAgICAgIGRvYjogdGhpcy5zdGF0ZS5kb2IsXG4gICAgICAgIHRlbnVyZTogdGhpcy5wcm9wcy5kYXRhLnRlbnVyZSxcbiAgICAgICAgaW5pdGlhbF9hbW91bnQ6IHRoaXMucHJvcHMuZGF0YS5pbml0aWFsX2Ftb3VudCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxuICAgICAgICBhY2NvdW50X251bWJlcjogdGhpcy5zdGF0ZS5hY2NvdW50TnVtYmVyID8gdGhpcy5zdGF0ZS5hY2NvdW50TnVtYmVyIDogJzEyMzQ1Njc4OTAnLFxuICAgICAgICBwYW46IHRoaXMuc3RhdGUuY2FyZE51bWJlcixcbiAgICAgICAgY3Z2OiB0aGlzLnN0YXRlLmN2dixcbiAgICAgICAgZXhwX2RhdGU6IGAke2RhdGVbMl0uc2xpY2UoMil9JHtudW1lcmFsKGRhdGVbMF0pLmZvcm1hdCgnMDAnKX1gXG4gICAgICB9XG4gICAgICBBcGkua3ljVXBkYXRlKEpTT04uc3RyaW5naWZ5KGt5Y0Zvcm0pKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaURhdGEgPSB7XG4gICAgICAgICAgXCJlbWFpbFwiOiBkYXRhLmVtYWlsLFxuICAgICAgICAgIFwiYW1vdW50XCI6IGRhdGEuaW5pdGlhbF9hbW91bnQsXG4gICAgICAgICAgXCJsb2FuX2Nvc1wiOiBcIjFcIixcbiAgICAgICAgICBcInRlbnVyZVwiOiBkYXRhLnRlbnVyZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXBpRGF0YSB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gQXBpLmxvYW5BcHBsaWNhdGlvbihKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Rlc2NyaXB0aW9uOiByZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9ufSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICBjb25zdCBrZXlzID0gW1wibmF0aW9uYWxfaWRcIiwgJ3N0YXRlbWVudCcsICdjb250cmFjdCcsICdwYXlzbGlwJ11cbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0aGlzLnN0YXRlLmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAgIGtleXNbaV0sIHRoaXMuc3RhdGUuZmlsZXNbaV0sIHRoaXMuc3RhdGUuZmlsZXNbaV0ubmFtZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2xvYW5faWQnLCByZXNwb25zZS5kYXRhLmRhdGEuaWQpXG4gICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBmaWxlcy4uLicpO1xuICAgICAgICAgIEFwaS5kb2NVcGxvYWQoZm9ybURhdGEpLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57Y29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KVxuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZU5leHQoKTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pXG4gICAgICB9KX1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBlZHVsaXN0ID0gWydOb25lJywgJ1ByaW1hcnknLCAnU2Vjb25kYXJ5JywgJ0RpcGxvbWEnLCAnQmFjaGVsb3JzJywgJ01hc3RlcnMnLCAnRG9jdG9yYXRlJ107XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2U7XG4gICAgY29uc3QgaGFuZGxlVGVybXMgPSB0aGlzLmhhbmRsZVRlcm1zXG4gICAgY29uc3QgZ29Ub0Rhc2hib2FyZCA9IHRoaXMuZ29Ub0Rhc2hib2FyZC5iaW5kKHRoaXMpXG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVN0ZXAsIGZpcnN0TmFtZSwgbG9hZGluZywgdGVybXNDaGVja2VkLCBjb25kaXRpb25zQ2hlY2tlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmaXhlZEhlaWdodFBhcGVyID0gY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzLmZpeGVkSGVpZ2h0KTtcbiAgICBjb25zdCBzdWNjZXNzUGFwZXIgPSBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXMuc3VjY2Vzc1BhcGVyKTtcbiAgICBjb25zdCBMYWJlbCA9IDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJjYXB0aW9uXCI+UExFQVNFIENMSUNLIFRPIEFHUkVFIFRPIFRIRSBURVJNUyBBTkQgQ09ORElUSU9OUzwvVHlwb2dyYXBoeT5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgey8qIDxCYWNrIC8+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN0ZXBDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmlnQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuc3RlcHBlciB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVMYWJlbFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3N0ZXBzLm1hcChsYWJlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDdXN0b21TdGVwSWNvbn0+e2xhYmVsfTwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L1N0ZXBwZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSB2YWxpZGF0ZT1cInRydWVcIiBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMFxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRIZWlnaHRQYXBlcj17Zml4ZWRIZWlnaHRQYXBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIExhYmVsPXtMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zQ2hlY2tlZD17dGVybXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gMX1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gMSkgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDJ9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDIpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWR1bGlzdD17ZWR1bGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDN9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDMpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5rcz17YmFua3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2F2ZT17dGhpcy5oYW5kbGVTYXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGF0ZUNoYW5nZT17dGhpcy5oYW5kbGVEYXRlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSA0fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSA0KSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gNX1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gNSkgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NQYXBlcj17c3VjY2Vzc1BhcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gNn1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gNikgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2g9e2dvVG9EYXNoYm9hcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4QmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA8IDUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDAgJiYgIXRlcm1zQ2hlY2tlZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNCAmJiAhY29uZGl0aW9uc0NoZWNrZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI0fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uUHJvZ3Jlc3N9Lz4gOiB0aGlzLnN0ZXBBY3Rpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZvcm0wID0gKHtmaXhlZEhlaWdodFBhcGVyLCBjbGFzc2VzLCBmaXJzdE5hbWUsIHRlcm1zQ2hlY2tlZCwgaGFuZGxlQ2hhbmdlLCBoYW5kbGVUZXJtcywgTGFiZWx9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cInN1YnRpdGxlMVwiID5Mb2FuIEFwcGxpY2F0aW9uIEluc3RydWN0aW9uczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIFdlbGNvbWUgdG8gdGhlIEluc3RhS2FzaCBhcHBsaWNhdGlvbiBwb3J0YWwge2ZpcnN0TmFtZX0sXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgd2Ugd2lsbCB3YWxrIHlvdSB0aHJvdWdoIHRoZSBlYXN5IHByb2Nlc3MgYXMgeW91IGNvbnRpbnVlIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgUGxlYXNlIGhhdmUgdGhlIGZvbGxvd2luZyBkb2N1bWVudHMgYXZhbGFibGU6XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5CYXNpYyBpbmZvcm1hdGlvbiBhYm91dCB5b3Vyc2VsZjwvbGk+XG4gICAgICAgICAgICA8bGk+Rm9yIHBlcnNvbmFsIGxvYW5zLCBzcGVjaWZ5IGVtcGxveWVyLCBlbXBsb3llciByZWZyZW5jZSBudW1iZXIsIHlvdXIgY3VycmVudCBzYWxhcnkgPC9saT5cbiAgICAgICAgICAgIDxsaT5BIHBpY3R1cmUgb2YgeW91IGZvciB5b3VyIGxvYW4gcHJvZmlsZTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIFlvdXIgYXBwbGljYXRpb24gaXMgYXV0b21hdGljYWxseSBzYXZlZCBhcyB5b3UgZ28gdGhyb3VnaCB0aGUgcHJvY2Vzc1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIEZvciBpbnF1aXJpZXMgcGxlYXNlIHNlbmQgYW4gZW1haWwgdG8gYm9ycm93QEluc3RhS2FzaC5jb21cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9IHtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwic3VidGl0bGUxXCIgPkFwcGxpY2F0aW9uIHJlcXVpcmVtZW50czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIFRoZSBmb2xsb3dpbmcgYXJlIHNwZWNpZmljIHJlcXVpcmVtZW50cyBmb3IgYXBwbHlpbmcgZm9yIFBPUCBsZW5kaW5nXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5SZWFkIGluc3RydWN0aW9uczwvbGk+XG4gICAgICAgICAgICA8bGk+UHJvdmlkZSBhbGwgb3RoZXIgcGVyc29uYWwgaW5mb3JtYXRpb248L2xpPlxuICAgICAgICAgICAgPGxpPkVtcGxveW1lbnQgaGlzdG9yeSA8L2xpPlxuICAgICAgICAgICAgPGxpPkJWTiA8L2xpPlxuICAgICAgICAgICAgPGxpPkJhbmsgZGV0YWlsczwvbGk+XG4gICAgICAgICAgICA8bGk+RG9jdW1lbnRzIGZvciBhY2NvdW50IHN0YXRlbWVudHM8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIENsaWNrIG5leHQgdG8gcHJvY2VlZCB0byB0aGUgbmV4dCBzdGFnZSBvZiB5b3VyIEluc3RhS2FzaCBhcHBsaWNhdGlvblxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtc0NoZWNrZWRcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Rlcm1zQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD17TGFiZWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApXG59XG5cbmNvbnN0IEZvcm0xID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVRlcm1zLCBzdGF0ZToge2ZpcnN0TmFtZSwgbGFzdE5hbWUsXG4gIGRvYiwgbW9iaWxlLCBtb2JpbGVDaGVjaywgZW1wbG95ZWVSZWZlcmVuY2UsIGVtcGxveWVlTnVtYmVyLCBzYWxhcnksIGFkZHJlc3MsXG4gIGVtYWlsLCByZWdpb24sIGFkZHJlc3NDaGVjaywgTmF0aW9uYWxJZE5vfVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+UEVSU09OQUwgSU5GT1JNQVRJT048L1R5cG9ncmFwaHk+XG5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1maXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLW5pbi1pbnB1dFwiXG4gICAgICAgICAgICBsYWJlbD1cIk5hdGlvbmFsIElEIE51bWJlclwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYXRpb25hbC1pZC1udW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJOYXRpb25hbElkTm9cIlxuICAgICAgICAgICAgdmFsdWU9e05hdGlvbmFsSWROb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE5hdGlvbmFsIElEIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWRvYi1pbnB1dFwiXG4gICAgICAgICAgICBsYWJlbD1cIkRhdGUgb2YgQmlydGhcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIGZvcm1hdD1cImRkL21tL3l5eXlcIlxuICAgICAgICAgICAgbmFtZT1cImRvYlwiXG4gICAgICAgICAgICB2YWx1ZT17ZG9ifVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e21vYmlsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnLCBwYWRkaW5nOiAwfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTEwcHgnLCBtYXJnaW5MZWZ0OjB9fVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2JpbGVDaGVja1wiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21vYmlsZUNoZWNrfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBzdHlsZT17e2ZvbnRTaXplOiAnMC41cmVtJ319PlxuICAgICAgICAgICAgICAgICAgQnkgY2xpY2tpbmcgdGhlIGJ1dHRvbiB5b3Ugb3B0IGluIGZvciBzbXMgbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICBvZiBvZmZlcmluZ3Mgc21zIGNoYXJnZXMgYXBwbHlcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImVtcGxveWVlUmVmZXJlbmNlXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZW1wbG95ZWUtcmVmZXJlbmNlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1wbG95ZXIgQWRkcmVzc1wiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlUmVmZXJlbmNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbXBsb3llcnMgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZW1wbG95ZWVOdW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1lbXBsb3llZS1udW1iZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbXBsb3llZSBOdW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZU51bWJlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtcGxveWVlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwic2FsYXJ5XCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2FsYXJ5XCJcbiAgICAgICAgICAgIGxhYmVsPVwiU2FsYXJ5XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtzYWxhcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNb250aGx5IFNhbGFyeSBBbW91bnRcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1hZGRyZXNzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGh5c2ljYWwgQWRkcmVzcyBJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGhvbWUgYWRkcmVzcywgcGxlYXNlIHNwZWNpZnkgc3RyZWV0IG5hbWUgb3IgdXNlIGxvY2F0aW9uIGZpbmRlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LXJlZ2lvblwiXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgIGxhYmVsPVwiQ3VycmVudCBSZWdpb25cIlxuICAgICAgICAgICAgbmFtZT1cInJlZ2lvblwiXG4gICAgICAgICAgICB2YWx1ZT17cmVnaW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBSZWdpb25cIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cmVnaW9ucy5tYXAoKHJlZ2lvbikgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtyZWdpb24ucmVnaW9uX2lkfSB2YWx1ZT17cmVnaW9uLnJlZ2lvbl9pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyx3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3JlZ2lvbi5uYW1lX2VufTwvZGl2PjxkaXY+e3JlZ2lvbi5uYW1lX2FyfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3twYWRkaW5nOiAwfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fSBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIn19PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICctMTVweCcsIG1hcmdpbkxlZnQ6MCwgbWFyZ2luUmlnaHQ6MH19XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NDaGVja1wiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FkZHJlc3NDaGVja31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micgc3R5bGU9e3tmb250U2l6ZTogJzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBpbmRpY2F0ZSBpZiB5b3VyIGFkZHJlc3MgaGFzIGNoYW5nZWQgaW4gdGhlIHBhc3RcbiAgICAgICAgICAgICAgICAgIDMgeWVhcnMuXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG5cbiAgKVxufVxuXG5jb25zdCBGb3JtMiA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBlZHVsaXN0LCBzdGF0ZToge2dlbmRlciwgZWR1Y2F0aW9uLCBldGhuaWNpdHl9fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5ERU1PR1JBUEhJQ1M8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1nZW5kZXJcIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkdlbmRlclwiXG4gICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcbiAgICAgICAgICAgIHZhbHVlPXtnZW5kZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxlYXNlIHBpY2sgeW91ciBnZW5kZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PSdtYWxlJyB2YWx1ZT0nbWFsZSc+XG4gICAgICAgICAgICAgIE1hbGVcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PSdmZW1hbGUnIHZhbHVlPSdmZW1hbGUnPlxuICAgICAgICAgICAgICBGZW1hbGVcbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWVkdWNhdGlvblwiXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgIGxhYmVsPVwiRWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIG5hbWU9XCJlZHVjYXRpb25cIlxuICAgICAgICAgICAgdmFsdWU9e2VkdWNhdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZWR1bGlzdC5tYXAoKGxldmVsKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2xldmVsfSB2YWx1ZT17bGV2ZWx9PlxuICAgICAgICAgICAgICAgIHtsZXZlbH1cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwiZXRobmljaXR5XCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZXRobmljaXR5XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRXRobmljaXR5XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZXRobmljaXR5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRXRobmljaXR5XCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gIClcbn1cblxuY29uc3QgRm9ybTMgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgYmFua3MsIGhhbmRsZVNhdmUsIGhhbmRsZURhdGVDaGFuZ2UsXG4gIHN0YXRlOiB7Z3JhY2VQZXJpb2QsIGhhc2NyZWRpdFNjb3JlLCBjcmVkaXRTY29yZSwgcmVwYXltZW50UGxhbiwgYmFua05hbWUsIGFjY291bnROdW1iZXIsIGNhcmROdW1iZXIsIGN2diwgZXhwRGF0ZX19KSA9PiB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5FTElHSUJJTElUWTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1ncmFjZVBlcmlvZFwiXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD1cIkVsaWdpYmlsaXR5IGZvciBncmFjZSBwZXJpb2RcIlxuICAgICAgICAgICAgICBuYW1lPVwiZ3JhY2VQZXJpb2RcIlxuICAgICAgICAgICAgICB2YWx1ZT17Z3JhY2VQZXJpb2R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge1snMSBXZWVrJywgJzIgV2Vla3MnLCAnMyBXZWVrcycsICcxIE1vbnRoJ10ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1lZHVjYXRpb25cIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJEbyB5b3UgaGF2ZSBhIGNyZWRpdCBzY29yZT9cIlxuICAgICAgICAgICAgICBuYW1lPVwiaGFzY3JlZGl0U2NvcmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17aGFzY3JlZGl0U2NvcmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScxJyB2YWx1ZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzAnIHZhbHVlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNjcmVkaXRTY29yZT8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICBuYW1lPVwiY3JlZGl0U2NvcmVcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWNyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJZiB5ZXMsIHBsZWFzZSBwcm92aWRlIHlvdXIgY3JlZGl0IHNjb3JlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWRpdFNjb3JlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENyZWRpdCBTY29yZVwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD0nY2FwdGlvbic+XG4gICAgICAgICAgREVCSVQgJiBSRUNPTkNJTElBVElPTiBBVVRIT1JJWkFUSU9OXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1yZXBheW1lbnQtcGxhblwiXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD1cIkhvdyB3b3VsZCB5b3UgbGlrZSB0byByZXBheSB5b3VyIGxvYW4/XCJcbiAgICAgICAgICAgICAgbmFtZT1cInJlcGF5bWVudFBsYW5cIlxuICAgICAgICAgICAgICB2YWx1ZT17cmVwYXltZW50UGxhbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzEnIHZhbHVlPVwiQmFua1wiPlxuICAgICAgICAgICAgICAgIEJhbmtcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMCcgdmFsdWU9XCJDYXJkXCI+XG4gICAgICAgICAgICAgICAgQ2FyZFxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHsocmVwYXltZW50UGxhbiA9PT0gJ0NhcmQnKSA/XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcmROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jYXJkTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FyZCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXJkTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2FyZCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Mn0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWN2dlwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNWVlwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N2dn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENWVlwiXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogMywgbWluTGVuZ3RoOiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Mn0+XG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGF1dG9Pa1xuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICB2aWV3cz17W1wieWVhclwiLCBcIm1vbnRoXCJdfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFeHBpcnkgRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZXhwRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpICsgMyxkYXRlLmdldE1vbnRoKCkpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4cERhdGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtYmFuay1uYW1lXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJhbmsgTmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBCYW5rIE5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5rTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JhbmtOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JhbmtzLm1hcCgoYmFuaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17YmFua30+XG4gICAgICAgICAgICAgICAgICAgIHtiYW5rfVxuICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1hY2NvdW50TnVtYmVyXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFjY291bnQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBY2NvdW50IE51bWJlclwiXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD0nY2FwdGlvbic+XG4gICAgICAgICAgTElTVCBPRiBET0NVTUVOVFMgVE8gVVBMT0FEXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZWNlY2VjJywgcGFkZGluZzogJzhweCd9fT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5BIHBhc3Nwb3J0IHBob3RvZ3JhcGg8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5CYW5rIHN0YXRlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkxldHRlciBvZiBlbXBsb3ltZW50PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8RHJvcHpvbmVBcmVhXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTYXZlfVxuICAgICAgICAgICAgICBmaWxlc0xpbWl0PXs0fVxuICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2FwcGxpY2F0aW9uL3BkZiddfVxuICAgICAgICAgICAgICBzaG93UHJldmlld3M9e3RydWV9XG4gICAgICAgICAgICAgIG1heEZpbGVTaXplPXs1MDAwMDAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgey8qIDxRdWVzdGlvbnMgZW1haWw9e2VtYWlsfS8+ICovfVxuICAgICAgPC9QYXBlcj5cbiAgICApXG4gIH1cblxuY29uc3QgRm9ybTQgPSAoe2NsYXNzZXMsIGhhbmRsZVRlcm1zLCBzdGF0ZToge2NvbmRpdGlvbnNDaGVja2VkfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdDb250YWluZXJ9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBURVJNUyAmIENPTkRJVElPTlNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1DYXB0aW9ufSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBQbGVhc2UgcmVhZCB0aHJvdWdoIGFuZCBhY2NlcHQgdGhlIHRlcm1zICZcbiAgICAgICAgICAgIGNvbmRpdGlvbnNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMzMwLFxuICAgICAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMS4gWW91ciBhZ3JlZW1lbnRcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgQnkgdXNpbmcgdGhpcyBTaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnksIGFuZCB0b1xuICAgICAgICAgICAgY29tcGx5IHdpdGgsIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLiBJZiB5b3UgZG9cbiAgICAgICAgICAgIG5vdCBhZ3JlZSB0byB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucywgcGxlYXNlIGRvXG4gICAgICAgICAgICBub3QgdXNlIHRoaXMgc2l0ZS4gUExFQVNFIE5PVEU6IFdlIHJlc2VydmUgdGhlXG4gICAgICAgICAgICByaWdodCwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gY2hhbmdlLCBtb2RpZnkgb3JcbiAgICAgICAgICAgIG90aGVyd2lzZSBhbHRlciB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhdCBhbnlcbiAgICAgICAgICAgIHRpbWUuIFVubGVzcyBvdGhlcndpc2UgaW5kaWNhdGVkLCBhbWVuZG1lbnRzIHdpbGxcbiAgICAgICAgICAgIGJlY29tZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuIFBsZWFzZSByZXZpZXcgdGhlc2VcbiAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zIHBlcmlvZGljYWxseS4gWW91ciBjb250aW51ZWRcbiAgICAgICAgICAgIHVzZSBvZiB0aGUgU2l0ZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgY2hhbmdlc1xuICAgICAgICAgICAgYW5kL29yIG1vZGlmaWNhdGlvbnMgd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNjZXB0YW5jZVxuICAgICAgICAgICAgb2YgdGhlIHJldmlzZWQgVGVybXMgYW5kIENvbmRpdGlvbnMgYW5kIHRoZVxuICAgICAgICAgICAgcmVhc29uYWJsZW5lc3Mgb2YgdGhlc2Ugc3RhbmRhcmRzIGZvciBub3RpY2Ugb2ZcbiAgICAgICAgICAgIGNoYW5nZXMuIEZvciB5b3VyIGluZm9ybWF0aW9uLCB0aGlzIHBhZ2Ugd2FzIGxhc3RcbiAgICAgICAgICAgIHVwZGF0ZWQgYXMgb2YgdGhlIGRhdGUgYXQgdGhlIHRvcCBvZiB0aGVzZSB0ZXJtcyBhbmRcbiAgICAgICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICA+XG4gICAgICAgICAgICAyLiBQcml2YWN5XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIFBsZWFzZSByZXZpZXcgb3VyIFByaXZhY3kgUG9saWN5LCB3aGljaCBhbHNvIGdvdmVybnNcbiAgICAgICAgICAgIHlvdXIgdmlzaXQgdG8gdGhpcyBTaXRlLCB0byB1bmRlcnN0YW5kIG91clxuICAgICAgICAgICAgcHJhY3RpY2VzLiBCeSB1c2luZyB0aGlzIFNpdGUsIHlvdSBhZ3JlZSB0byBiZSBib3VuZFxuICAgICAgICAgICAgYnksIGFuZCB0byBjb21wbHkgd2l0aCwgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMuXG4gICAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHRvIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLFxuICAgICAgICAgICAgcGxlYXNlIGRvIG5vdCB1c2UgdGhpcyBzaXRlLiBQTEVBU0UgTk9URTogV2UgcmVzZXJ2ZVxuICAgICAgICAgICAgdGhlIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byBjaGFuZ2UsIG1vZGlmeVxuICAgICAgICAgICAgb3Igb3RoZXJ3aXNlIGFsdGVyIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zIGF0IGFueVxuICAgICAgICAgICAgdGltZS4gVW5sZXNzIG90aGVyd2lzZSBpbmRpY2F0ZWQsIGFtZW5kbWVudHMgd2lsbFxuICAgICAgICAgICAgYmVjb21lIGVmZmVjdGl2ZSBpbW1lZGlhdGVseS4gUGxlYXNlIHJldmlldyB0aGVzZVxuICAgICAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnMgcGVyaW9kaWNhbGx5LiBZb3VyIGNvbnRpbnVlZFxuICAgICAgICAgICAgdXNlIG9mIHRoZSBTaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBjaGFuZ2VzXG4gICAgICAgICAgICBhbmQvb3IgbW9kaWZpY2F0aW9ucyB3aWxsIGNvbnN0aXR1dGUgeW91ciBhY2NlcHRhbmNlXG4gICAgICAgICAgICBvZiB0aGUgcmV2aXNlZCBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgdGhlXG4gICAgICAgICAgICByZWFzb25hYmxlbmVzcyBvZiB0aGVzZSBzdGFuZGFyZHMgZm9yIG5vdGljZSBvZlxuICAgICAgICAgICAgY2hhbmdlcy4gRm9yIHlvdXIgaW5mb3JtYXRpb24sIHRoaXMgcGFnZSB3YXMgbGFzdFxuICAgICAgICAgICAgdXBkYXRlZCBhcyBvZiB0aGUgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoZXNlIHRlcm1zIGFuZFxuICAgICAgICAgICAgY29uZGl0aW9ucy5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25kaXRpb25zQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZGl0aW9uc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9XCJJIGhhdmUgcmVhZCBhbmQgdW5kZXJzdG9vZCB0aGUgdGVybXMgJiBjb25kaXRpb25zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRm9ybTUgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgc3VjY2Vzc1BhcGVyLCBzdGF0ZToge2Rlc2NyaXB0aW9ufX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdWNjZXNzUGFwZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3VjY2Vzc1RleHR9IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Y2Nlc3NUZXh0fSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgWW91J3JlIG9uZSBzdGVwIGNsb3NlciB0byBjb21wbGV0aW5nIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiwgPGJyLz5cbiAgICAgICAgICBJbnN0YWthc2ggd291bGQgbGlrZSB0byBnZXQgeW91ciBwZXJzb25hbCBzb2NpYWwgbWVkaWEgZGV0YWlscyBhbmQgNSBvZiB5b3VyIGNsb3NlIGNvbnRhY3RzIGluZm9ybWF0aW9uLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5TT0NJQUwgTUVESUEgSEFORExFPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXRleHRmaWVsZFwiXG4gICAgICAgICAgICBsYWJlbD1cIkZhY2Vib29rXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXR3aXR0ZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJUd2l0dGVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtaW5zdGFncmFtXCJcbiAgICAgICAgICAgIGxhYmVsPVwiSW5zdGFncmFtXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXNuYXBjaGF0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiU25hcCBDaGF0XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zQWN0aXZlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+UkVGRVJFRSBDT05UQUNUIElORk88L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgMVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlMWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxbGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxbW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAyXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUyZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUybGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUybW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTNmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2xhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM21vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgNFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlNGZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0bGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNG1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0bW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSA1XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWU1Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1bGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1bW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gIClcbn1cblxuY29uc3QgRm9ybTYgPSAoe2NsYXNzZXMsIGRhc2gsIHN0YXRlOiB7Zmlyc3ROYW1lfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbENvbnRhaW5lcn0+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9uc3tcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gPlxuICAgICAgICAgICAgICAgIHtmaXJzdE5hbWV9ISEhXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBBbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIHlvdSB3aXRoIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiBJRC5cbiAgICAgICAgICAgICAgSWYgeW91IHdpc2ggdG8gbWFrZSBlbnF1aXJpZXMgYWJvdXQgeW91ciBsb2FuLFxuICAgICAgICAgICAgICBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib3Jyb3dASW5zdGFLYXNoLmNvbS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgWW91ciBkYXNoYm9hcmQgaXMgcmVhZHkgZm9yIHlvdSB0byByZXZpZXcgeW91ciBsb2FuIGhpc3RvcnlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2Rhc2h9PlxuICAgICAgICAgICAgICBCYWNrIHRvIERhc2hib2FyZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMb2FuQXBwbGljYXRpb25Gb3JtKTtcblxuey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gIDxUZXh0RmllbGRcbiAgZGlzYWJsZWQ9eyFyZWdpb24gPyB0cnVlIDogZmFsc2V9XG4gIGlkPVwib3V0bGluZWQtc2VsZWN0LWNpdHlcIlxuICBzZWxlY3RcbiAgbGFiZWw9XCJDdXJyZW50IENpdHlcIlxuICBuYW1lPVwiY2l0eVwiXG4gIHZhbHVlPXtjaXR5fVxuICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgc2hyaW5rOiB0cnVlLFxuICB9fVxuICB2YXJpYW50PVwib3V0bGluZWRcIlxuICA+XG4gIHtyZWdpb24gPyAodGhpcy5nZXRDaXR5KHJlZ2lvbikubWFwKChjaXR5KSA9PiAoXG4gIDxNZW51SXRlbSBrZXk9e2NpdHkuY2l0eV9pZH0gdmFsdWU9e2NpdHkuY2l0eV9pZH0+XG4gIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gIDxkaXY+e2NpdHkubmFtZV9lbn08L2Rpdj48ZGl2PntjaXR5Lm5hbWVfYXJ9PC9kaXY+XG4gIDwvZGl2PlxuICA8L01lbnVJdGVtPlxuICApKSkgOiAodGhpcy5nZXRDaXR5KDEpLm1hcCgoY2l0eSkgPT4gKFxuICA8TWVudUl0ZW0ga2V5PXtjaXR5LmNpdHlfaWR9IHZhbHVlPXtjaXR5Lm5hbWVfZW59PlxuICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICA8ZGl2PntjaXR5Lm5hbWVfZW59PC9kaXY+PGRpdj57Y2l0eS5uYW1lX2FyfTwvZGl2PlxuICA8L2Rpdj5cbiAgPC9NZW51SXRlbT5cbiAgKSkpfVxuICA8L1RleHRGaWVsZD5cbjwvR3JpZD4gKi99XG4iXSwic291cmNlUm9vdCI6IiJ9