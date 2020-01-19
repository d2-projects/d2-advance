<template>
  <page-container>
    <template #header>
      <h2>
        {{ $t('IP Address') }}
        <el-link
          icon="el-icon-link"
          type="primary"
          href="https://github.com/MZCretin/RollToolsApi#%E5%9B%9Bip%E5%9C%B0%E5%9D%80%E4%BF%A1%E6%81%AF"
          target="_blank"
          >{{ $t('Document link') }}</el-link
        >
      </h2>
    </template>
    <el-input placeholder="192.168.0.1" v-model="ip" clearable>
      <template #prepend>
        <i class="el-icon-location-information" />{{
          $t('admin.roll-tools-api.ip-address.input')
        }}
      </template>
    </el-input>
    <async
      :api="$rta.apis.ip.self"
      :transform="transform"
      @success="onSelfSuccess"
    >
      <template v-slot:default="{ pending, error }">
        <div v-if="pending">
          Loading ...
        </div>
        <div v-else-if="error">
          {{ error.message }}
        </div>
        <div v-else>
          <async
            v-if="targetIP"
            :api="$rta.apis.ip.aim_ip"
            :args="[ip]"
            :transform="transform"
          >
            <template v-slot:default="{ pending, error, data }">
              <div v-if="pending">
                Loading ...
              </div>
              <div v-else-if="error">
                {{ error.message }}
              </div>
              <div v-else>
                <p>
                  <b>{{ $t('admin.roll-tools-api.ip-address.desc') }}：</b
                  >{{ data.desc }}
                </p>
                <b>{{ $t('admin.roll-tools-api.ip-address.raw') }}：</b>
                <pre>{{ data }}</pre>
              </div>
            </template>
          </async>
        </div>
      </template>
    </async>
  </page-container>
</template>

<script>
import { get, debounce } from 'lodash'

export default {
  data() {
    return {
      ip: ''
    }
  },
  computed: {
    targetIP: {
      get() {
        return this.ip
      },
      set: _.debounce(function(newValue) {
        this.ip = newValue
      }, 500)
    }
  },
  methods: {
    transform(response) {
      return get(response, 'data.data', null)
    },
    onSelfSuccess(data) {
      this.ip = data.ip
    }
  }
}
</script>
