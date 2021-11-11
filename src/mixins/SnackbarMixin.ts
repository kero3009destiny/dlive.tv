import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { DocumentNode } from 'graphql';
import { ServerMutationError } from '@/models/error/ServerMutationError';
import { ServerMutationInconsistentError } from '@/models/error/ServerMutationInconsistentError';

const fallbackErrorCode = 999;
const fallbackError = 'ErrMsg.999';
const errorMap: Map<number, string> = new Map<number, string>([
  [fallbackErrorCode, fallbackError],
  [1001, 'ErrMsg.1001'],
  [1002, 'ErrMsg.1002'],
  [1003, 'ErrMsg.1003'],
  [1004, 'ErrMsg.1004'],
  [1005, 'ErrMsg.1005'],
  [1006, 'ErrMsg.1006'],
  [1007, 'ErrMsg.1007'],
  [1008, 'ErrMsg.1008'],
  [1010, 'ErrMsg.1010'],
  [1011, 'ErrMsg.1011'],
  [1101, 'ErrMsg.1101'],
  [1201, 'ErrMsg.1201'],
  [1301, 'ErrMsg.1301'],
  [1302, 'ErrMsg.1302'],
  [1304, 'ErrMsg.1304'],
  [1401, 'ErrMsg.1401'],
  [1402, 'ErrMsg.1402'],
  [1403, 'ErrMsg.1403'],
  [1404, 'ErrMsg.1404'],
  [1405, 'ErrMsg.1405'],
  [1406, 'ErrMsg.1406'],
  [1407, 'ErrMsg.1407'],
  [1408, 'ErrMsg.1408'],
  [1409, 'ErrMsg.1409'],
  [1411, 'ErrMsg.1411'],
  [1412, 'ErrMsg.1412'],
  [1414, 'ErrMsg.1414'],
  [1415, 'ErrMsg.1415'],
  [1416, 'ErrMsg.1416'],
  [1417, 'ErrMsg.1417'],
  [1418, 'ErrMsg.1418'],
  [1419, 'ErrMsg.1419'],
  [1420, 'ErrMsg.1420'],
  [1421, 'ErrMsg.1421'],
  [1424, 'ErrMsg.1424'],
  [1425, 'ErrMsg.1425'],
  [1426, 'ErrMsg.1426'],
  [1427, 'ErrMsg.1427'],
  [1429, 'ErrMsg.1429'],
  [1431, 'ErrMsg.1431'],
  [1601, 'ErrMsg.1601'],
  [1602, 'ErrMsg.1602'],
  [1603, 'ErrMsg.1603'],
  [1604, 'ErrMsg.1604'],
  [1605, 'ErrMsg.1605'],
  [1606, 'ErrMsg.1606'],
  [1607, 'ErrMsg.1607'],
  [1608, 'ErrMsg.1608'],
  [1701, 'ErrMsg.1701'],
  [1702, 'ErrMsg.1702'],
  [1801, 'ErrMsg.1801'],
  [1901, 'ErrMsg.1901'],
  [1902, 'ErrMsg.1902'],
  [2001, 'ErrMsg.2001'],
  [2101, 'ErrMsg.2101'],
  [2102, 'ErrMsg.2102'],
  [2103, 'ErrMsg.2103'],
  [2104, 'ErrMsg.2104'],
  [2201, 'ErrMsg.2201'],
  [2202, 'ErrMsg.2202'],
  [2203, 'ErrMsg.2203'],
  [2301, 'ErrMsg.2301'],

  [2342, 'ErrMsg.2342'],
  [2343, 'ErrMsg.2343'],
  [2344, 'ErrMsg.2344'],
  [2345, 'ErrMsg.2345'],
  [2346, 'ErrMsg.2346'],
  [2347, 'ErrMsg.2347'],

  [2348, 'ErrMsg.2348'],
  [2349, 'ErrMsg.2349'],
  [2350, 'ErrMsg.2350'],
  [2351, 'ErrMsg.2351'],
  [2352, 'ErrMsg.2352'],

  [2221, 'ErrMsg.2221'],
  [3001, 'ErrMsg.3001'],
  [4002, 'ErrMsg.4002'],
  [4021, 'ErrMsg.4021'],
  [4022, 'ErrMsg.4022'],
  [4023, 'ErrMsg.4023'],
  [4071, 'ErrMsg.4071'],
  [4072, 'ErrMsg.4072'],
  [4073, 'ErrMsg.4073'],
  [5001, 'ErrMsg.5001'],
  [5002, 'ErrMsg.5002'],
  [5003, 'ErrMsg.5003'],
  [5004, 'ErrMsg.5004'],
  [5005, 'ErrMsg.5005'],
  [5006, 'ErrMsg.5006'],
  [5007, 'ErrMsg.5007'],
  [5008, 'ErrMsg.5008'],
  [5009, 'ErrMsg.5009'],
  [5010, 'ErrMsg.5010'],
  [5011, 'ErrMsg.5011'],
  [5012, 'ErrMsg.5012'],
  [5013, 'ErrMsg.5013'],
  [5014, 'ErrMsg.5014'],
  [5015, 'ErrMsg.5015'],
  [5016, 'ErrMsg.5016'],
  [5017, 'ErrMsg.5017'],
  [5201, 'ErrMsg.5201'],
  [5203, 'ErrMsg.5203'],
  [5205, 'ErrMsg.5205'],
  [5206, 'ErrMsg.5206'],
  [5207, 'ErrMsg.5207'],
  [5209, 'ErrMsg.5209'],
  [5211, 'ErrMsg.5211'],
  [5212, 'ErrMsg.5212'],
  [5213, 'ErrMsg.5213'],
  [5214, 'ErrMsg.5214'],
  [5215, 'ErrMsg.5215'],
  [5351, 'ErrMsg.5351'],
  [5352, 'ErrMsg.5352'],
  [6001, 'ErrMsg.6001'],
  [6002, 'ErrMsg.6002'],
  [6003, 'ErrMsg.6003'],
  [6004, 'ErrMsg.6004'],
  [6005, 'ErrMsg.6005'],
  [6006, 'ErrMsg.6006'],
  [6008, 'ErrMsg.6008'],
  [6009, 'ErrMsg.6009'],
  [6010, 'ErrMsg.6010'],
  [6011, 'ErrMsg.6011'],
  [6012, 'ErrMsg.6012'],
  [6013, 'ErrMsg.6013'],
  [6015, 'ErrMsg.6015'],
  [6016, 'ErrMsg.6016'],
  [6017, 'ErrMsg.6017'],
  [6018, 'ErrMsg.6018'],
  [6019, 'ErrMsg.6019'],
  [6020, 'ErrMsg.6020'],
  [6021, 'ErrMsg.6021'],
  [6022, 'ErrMsg.6022'],
  [6501, 'ErrMsg.6501'],
  [7001, 'ErrMsg.7001'],
  [7002, 'ErrMsg.7002'],
  [7003, 'ErrMsg.7003'],
  [7004, 'ErrMsg.7004'],
  [7005, 'ErrMsg.7005'],
  [7006, 'ErrMsg.7006'],
  [7007, 'ErrMsg.7007'],
  [7008, 'ErrMsg.7008'],
  [7011, 'ErrMsg.7011'],
  [7016, 'ErrMsg.7016'],
  [7017, 'ErrMsg.7017'],
  [7018, 'ErrMsg.7018'],
  [7102, 'ErrMsg.7102'],
  [8002, 'ErrMsg.8002'],
  [8004, 'ErrMsg.8004'],
  [8006, 'ErrMsg.8006'],
  [8007, 'ErrMsg.8007'],
  [9000, 'ErrMsg.9000'],
  [9001, 'ErrMsg.9001'],
  [9002, 'ErrMsg.9002'],
  [9005, 'ErrMsg.9005'],
  [9006, 'ErrMsg.9006'],
  [9007, 'ErrMsg.9007'],
  [9008, 'ErrMsg.9008'],
  [9009, 'ErrMsg.9009'],
  [9010, 'ErrMsg.9010'],
  [10000, 'ErrMsg.10000'],
  [10101, 'ErrMsg.10101'],
  [40000, 'ErrMsg.40000'],
  [40002, 'ErrMsg.40002'],
  [40003, 'ErrMsg.40003'],
  [40004, 'ErrMsg.40004'],
  [40005, 'ErrMsg.40005'],
  [40006, 'ErrMsg.40006'],
  [40007, 'ErrMsg.40007'],
  [40008, 'ErrMsg.40008'],
  [40009, 'ErrMsg.40009'],
  [40010, 'ErrMsg.40010'],
  [40011, 'ErrMsg.40011'],
  [40012, 'ErrMsg.40012'],
  [40013, 'ErrMsg.40013'],
  [40014, 'ErrMsg.40014'],
  [40015, 'ErrMsg.40015'],
  [40016, 'ErrMsg.40016'],
  [40017, 'ErrMsg.40017'],
  [40018, 'ErrMsg.40018'],
  [40019, 'ErrMsg.40019'],
  [40020, 'ErrMsg.40020'],
  [40021, 'ErrMsg.40021'],
  [40022, 'ErrMsg.40022'],
  [40023, 'ErrMsg.40023'],
  [4003, 'ErrMsg.4003']
]);

const snackbarModule = namespace('snackbar');

@Component
export default class SnackbarMixin extends Vue {
  @snackbarModule.Mutation('setSnackbarSuccess')
  public setSnackbarSuccess!: (text: string) => void;
  @snackbarModule.Mutation('setSnackbarError')
  public setSnackbarError!: (text: string) => void;

  public $handleInconsistentError(
    resp: object,
    fields: string[],
    mutation: DocumentNode,
    variables?: object
  ): never {
    this.$errCode(fallbackErrorCode);
    throw new ServerMutationInconsistentError(
      resp,
      fields,
      mutation,
      variables
    );
  }

  public $handleError(
    err: {
      code: number;
      message: string;
    } | null,
    mutation: DocumentNode,
    variables?: object,
    i18nParam?: object
  ): void {
    if (err === null) {
      return;
    }
    this.$errCode(err.code, i18nParam);
    throw new ServerMutationError(err, mutation, variables);
  }

  public $errCode(code: number, i18nParam?: object): void {
    const m = errorMap.get(code);
    let msg: string;
    if (m === undefined) {
      msg = fallbackError;
    } else {
      msg = m;
    }
    if (i18nParam) {
      this.setSnackbarError(this.$t(msg, i18nParam) as string);
    } else {
      this.setSnackbarError(this.$t(msg) as string);
    }
  }

  public $error(i18nMsg: string): void {
    this.setSnackbarError(this.$t(i18nMsg) as string);
  }

  public $errorPlain(msg: string): void {
    this.setSnackbarError(msg);
  }

  public $success(i18nMsg: string): void {
    this.setSnackbarSuccess(this.$t(i18nMsg) as string);
  }

  public $successPlain(msg: string): void {
    this.setSnackbarSuccess(msg);
  }
}
