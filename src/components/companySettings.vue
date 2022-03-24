<template>
  <ValidationObserver>
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 mt-1 mt-md-0">
        <b-form class="mt-2">
          <h3>Информация о компании</h3>
          <br />
          <b-row>
            <b-col col sm="6">
              <div class="justify-content-center">
                <ValidationProvider
                  name="email"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <b-form-group>
                    <label for="passport_data"> Данные пасспорта </label>
                    <b-form-input
                      id="passport_data"
                      type="text"
                      v-model="passportData"
                      placeholder="Пример: 'Рога и копыта'"
                    />
                    <div class="error" v-if="errors[0]">
                      {{ errors[0] }}
                    </div>
                    <!-- <input v-model="email" type="text" />
                  <span>{{ errors[0] }}</span> -->
                  </b-form-group>
                </ValidationProvider>
              </div>
            </b-col>

            <b-col sm="6">
              <b-form-group label="ИНН/КПП">
                <b-form-input
                  placeholder="5042134005 / 504201001"
                  name="username"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="ОГРН">
                <b-form-input name="name" placeholder="1145042003501" />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="Юридический адрес">
                <b-form-input
                  name="email"
                  placeholder="141075, Россия, г. Пушкин..."
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="Почтовый адрес">
                <b-form-input
                  name="company"
                  placeholder="141075, Россия, г. Пушкин..."
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="Расчетный счет">
                <b-form-input
                  name="company"
                  placeholder="546541564646546546546"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="Кор. счет">
                <b-form-input
                  name="company"
                  placeholder="546541564646546546546"
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="БИК">
                <b-form-input name="company" placeholder="454456" />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="ОКПО">
                <b-form-input
                  name="company"
                  placeholder="Какие-то значения.."
                />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="ОКВЭД">
                <b-form-input name="company" placeholder="17.11" />
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group label="Почта">
                <b-form-input type="email" placeholder="Dimka@ya.ru">
                </b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <button type="button" class="btn btn-primary m-5">Сохранить</button>
          <button type="button" class="btn btn-success m-5">
            Не сохранить
          </button>
        </b-form>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import { BForm, BFormGroup, BFormInput, BRow, BCol } from "bootstrap-vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("email", email);
extend("required", {
  ...required,
  message: "Это поле обязательно для заполнения!",
});

export default {
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      passportData: null,
      // companyData: null,
      // innData: null,
      // ogrnData: null,
      // bikData: null,
    };
  },
  directives: {},
};
</script>
