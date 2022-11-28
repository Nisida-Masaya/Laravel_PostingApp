import React, { memo, VFC } from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";

//VFCを使用することでchildrenの有無がわかる
//memoコンポーネントが変更されない限り再レンダリングしない
/* アロー関数の関数は毎回新しいものを生成している
  propsとしては違うものと判断
  useCallBackと使うと処理が変わらない場合は同じものを使う（関数を使う時）
*/
type Props = {
    onClose: () => void;
    isOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { onClose, isOpen } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%">TOP</Button>
                        <Button w="100%">プロフィール</Button>
                        <Button w="100%">設定</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});
