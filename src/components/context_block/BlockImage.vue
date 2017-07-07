<template>
    <div class="block">
        <el-row>
            <el-col :span="8">
        <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
            <img v-if="block.image_url" :src="block.image_url" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
            </el-col>
            <el-col :span="16">
                <el-form-item>
                    <el-input placeholder="画像のタイトルを入力" :value="block.image_title" @input="updateBlock($event, 'image_title')">
                        <template slot="append">{{ wordCount }}</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="画像のaltを入力" :value="block.image_alt" @input="updateBlock($event, 'image_alt')">
                        <template slot="append">{{ wordCount }}</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="画像の説明文を入力" :value="block.image_description" @input="updateBlock($event, 'image_description')">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="画像出典元URL" :value="block.image_source_url" @input="updateBlock($event, 'image_source_url')">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="画像出典元名" :value="block.image_source_title" @input="updateBlock($event, 'image_source_title')">
                    </el-input>
                </el-form-item>
                <el-form-item label="デザイン">
                    <el-radio :value="block.image_design_num" label="1" @input="updateBlock($event, 'image_design_num')">1列</el-radio>
                    <el-radio :value="block.image_design_num" label="2" @input="updateBlock($event, 'image_design_num')">2列</el-radio>
                </el-form-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {ElCol},
    props: [
      'blockNum'
    ],
    computed: {
      wordCount: function () {
        return this.block.image_description.length
      },
      block: function () {
        var targetBlock = this.$store.getters.blocks
        return targetBlock[this.blockNum].block
      },
      indexNum: function () {
        return this.blockNum
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!')
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!')
        }
        return isJPG && isLt2M
      },
      updateBlock (e, ElementName) {
        // TODO: actionを介して読んだほうが本当は良いんだろうな
        this.$store.commit('updateBlock', {
          data: e,
          elementName: ElementName,
          index: this.indexNum
        })
      }
    }
  }
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        display: block;
    }
</style>
